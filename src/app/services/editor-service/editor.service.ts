import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { clone, isNil, reduce, is, contains, hasIn } from 'ramda';
import { Editor } from 'ng2-ace-editor/node_modules/brace';
import { UUID } from 'angular2-uuid';

import { File } from '@models/file';
import { Node } from '@models/node';
import { XeditMapper } from '@models/schema/xedit-mapper';
import { Converters } from '@utils/converters';

@Injectable()
export class EditorService {

    // variables
    private file: BehaviorSubject<File>; // Change if do or redo only
    private fileState: BehaviorSubject<File>; // Current state content (Change if component change)
    private currentNode: BehaviorSubject<Node>; // Current node
    private currentNodeModify: Subject<Node>; // Change if node is modify
    private loading: BehaviorSubject<boolean>;

    // Constructor
    constructor() {
        this.file = new BehaviorSubject<File>(null);
        this.fileState = new BehaviorSubject<File>(null);
        this.currentNode = new BehaviorSubject<Node>(null);
        this.currentNodeModify = new Subject<Node>();
        this.loading = new BehaviorSubject<boolean>(false);
    }

    // ************************************** Getters and setters **************************************/
    setFile(file): void {
        this.file.next(file);
        this.fileState.next(file);
    }

    getFile(): Observable<File> {
        this.file.next(this.fileState.getValue());
        return this.file.asObservable();
    }

    getFileValue(): File {
        this.file.next(this.fileState.getValue());
        return this.file.getValue();
    }

    setFileState(file: File): void {
        this.fileState.next(file);
    }

    getFileState(): Observable<File> {
        return this.fileState.asObservable();
    }

    getFileStateValue(): File {
        return this.fileState.getValue();
    }

    setCurrentNode(node): void {
        this.currentNode.next(node);
    }

    getCurrentNode(): Observable<Node> {
        return this.currentNode.asObservable();
    }


    setCurrentNodeModify(node): void {
        this.currentNodeModify.next(node);
    }

    getCurrentNodeModify(): Observable<Node> {
        return this.currentNodeModify.asObservable();
    }

    isLoading() {
        return this.loading.asObservable();
    }

    setLoading(loading) {
        this.loading.next(loading);
    }

    /************************************** Public Methods **************************************/

    /**
     * Create file from data nodes
     */
    createFile(data): void {
        this.setFile(new File(data));
    }

    /**
     * Added new state
     */
    newStateFile(state: any, message: string): File {
        return this.file.getValue().newStateWithMessage(state, message);
    }

    /**
      * Return to the previous state if it exists, otherwise it does not do anything
     */
    lastStateFile(): void {
        this.file.getValue().lastState().then((value) => {
            this.setFile(value);
            this.setLoading(false);
        });
    }

    /**
     * Go to the next state if it exists, otherwise it does not do anything
     */
    nextStateFile(): void {
        this.file.getValue().nextState().then((value) => {
            this.setFile(value);
            this.setLoading(false);
        });
    }

    /**
     *
     */
    recoverySnapshot(key: string): void {
        this.getFileStateValue().recovery(key).then(() => {
            this.setFile(this.getFileStateValue());
        });
    }

    /**
     * Save content into document
     *
     * @param node DomNode
     * @param content Html content
     * @param message string message
     */
    save(node, content, message) {
        const fileContent = this.fileState.getValue().getState().content;

        /** @todo Improve performance clone */
        // let fileContent = clone(this.file.getValue().getState().content)
        let uuidPath = null;

        if (is(String, node)) {
            fileContent[node].content = Converters.html2json(content);
        } else {
            uuidPath = EditorService.getUuidPath(node);

            const root = fileContent[uuidPath.shift()];

            if (is(String, root.content)) {
                root.content = Converters.html2json(root.content);
            }

            // Modify file with new changes
            const editContent = reduce(function (acc, value) {
                return acc.child[value];
            }, root.content, uuidPath);
            editContent.child = Converters.html2json(content, false);
        }

        // Save new state
        const newFile = this.newStateFile(fileContent, message);
        this.setFileState(newFile);
    }

    /**
     * Add child or sibling node to area
     *
     * @param node
     * @param target
     * @param child
     */
    addNodeToArea(node: Node, newNode, child: boolean = false) {

        const message = (child ? 'Adding child' : 'Adding sibling') + ' to ' + node.getSection().getAttribute('xe_section');
        const file = this.newStateFile(this.fileState.getValue().getState().content, message);
        const section = node.getSection();

        const sectionPath = child ? Node.getContextPath(section) : Node.getContextPath(section.parentNode);

        const fileNode = reduce(function (n, value) {
            return n.child[value];
        }, file.getState().getContent()[node.getAreaId()].content, sectionPath);

        if (!child) {
            const idChild = section.getAttribute(XeditMapper.TAG_UUID);
            const nodeKey = Object.keys(newNode)[0];
            fileNode.child = reduce(function (object, nodeId) {
                const nodeValue = fileNode.child[nodeId];
                object[nodeId] = nodeValue;
                if (nodeId === idChild) {
                    object[nodeKey] = newNode[nodeKey];
                }
                return object;
            }, {}, Object.keys(fileNode.child));
        } else {
            const nodeKey = Object.keys(newNode)[0];
            fileNode.child[nodeKey] = newNode[nodeKey];
        }

        this.setFileState(file);
    }

    getUpdatedDocument() {
        const file = this.getFileStateValue();
        const state = file.getState();
        const document = { 'nodes': {} };

        for (const nodeId in state.content) {
            if (hasIn('content', state.content[nodeId])) {
                document['nodes'][nodeId] = {
                    content: Converters.json2html(state.content[nodeId].content, false)
                };
            }
        }
        console.log(document);
    }
    /************************************** Static Methods **************************************/

    /**
    * Parse DomNode to EditorNode
    *
    * @param element DomNode
    * @param path Uuid path
    */
    parseToNode(element) {

        const styles = [];
        const attributes = {};
        let node = null;

        const uuid = element.getAttribute(XeditMapper.TAG_UUID);

        Object.keys(element.attributes).forEach(key => {
            attributes[element.attributes[key].name] = element.attributes[key].value;
        });

        try {
            node = new Node(uuid, element, attributes);
        } catch (e) {
            console.error('Invalid node');
        }
        return node;
    }

    /*
    * Calculate uuid path to xedit node
    */
    static getUuidPath(element, rootTag = XeditMapper.TAG_EDITOR, path = [], onlySections = false) {
        const parent = element.parentNode;

        if (!isNil(element) && (!onlySections || element.hasAttribute(XeditMapper.TAG_SECTION_TYPE))) {
            path.unshift(element.getAttribute(XeditMapper.TAG_UUID));
        }

        return (element.nodeName.toLowerCase() === rootTag || isNil(parent)) ?
            path : this.getUuidPath(parent, rootTag, path);
    }

}
