import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Image } from '../../models/image';
import { File } from '../../models/file';
import { Observable } from 'rxjs/Observable';
import { Node } from '../../models/node';
import { clone, isNil, reduce, is } from 'ramda';
import { Editor } from 'ng2-ace-editor/node_modules/brace';
import { Subject } from 'rxjs/Subject';
import { XeditMapper } from '../../models/schema/xedit-mapper';
import { UUID } from 'angular2-uuid';

@Injectable()
export class EditorService {

  //Variables
  private file: BehaviorSubject<File>; // Change if do or redo only
  private fileState: BehaviorSubject<File>; // Current state content (Change if component change)
  private currentNode: Subject<Node>; // Current node
  private currentNodeModify: Subject<Node> // Change if node is modify
  private loading: BehaviorSubject<boolean>;

  //Constructor
  constructor() {
    this.file = new BehaviorSubject<File>(null);
    this.fileState = new BehaviorSubject<File>(null);
    this.currentNode = new BehaviorSubject<Node>(null);
    this.currentNodeModify = new Subject<Node>();
    this.loading = new BehaviorSubject<boolean>(false);
  }

  //************************************** Getters and setters **************************************/
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
    return this.file.getValue()
  }

  setFileState(file): void {
    this.fileState.next(file);
  }

  getFileState(): Observable<File> {
    return this.fileState.asObservable();
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
    var file = new File(data);
    this.setFile(file);
  }

  /**
   * Added new state 
   */
  newStateFile(state): File {
    return this.file.getValue().newState(state);
  }

  /**
    * Return to the previous state if it exists, otherwise it does not do anything
   */
  lastStateFile(): void {
    var file = this.file.getValue().lastState();
    this.setFile(file);
  }


  /**
   * Go to the next state if it exists, otherwise it does not do anything
   */
  nextStateFile(): void {
    var file = this.file.getValue().nextState();
    this.setFile(file);
  }

  /**
   * Save content into document
   * 
   * @param node DomNode
   * @param content Html content
   */
  save(node, content) {
    var fileContent = this.fileState.getValue().getState().content;

    // Save new state
    var newFile = this.newStateFile(fileContent);

    /** @todo Improve performance clone */
    //var fileContent = clone(this.file.getValue().getState().content)
    var uuidPath = null;

    if (is(String, node))
      fileContent[node].content = File.html2json(content);
    else {
      uuidPath = EditorService.getUuidPath(node);

      var root = fileContent[uuidPath.shift()];

      if (is(String, root.content))
        root.content = File.html2json(root.content);

      //Modify file with new changes
      var editContent = reduce(function (acc, value) {
        return acc.child[value];
      }, root.content, uuidPath);
      editContent.child = File.html2json(content, false)
    }

    this.setFileState(newFile);
  }


  /**
  * Parse DomNode to EditorNode
  *
  * @param element DomNode
  * @param path Uuid path
  */
  static parseToNode(element) {
    var title = element.tagName
    var styles = [];
    var attributes = {};
    var node = null;
    var path = EditorService.getUuidPath(element);
    var uuid = element.getAttribute(XeditMapper.TAG_UUID);

    Object.keys(element.attributes).forEach(key => {
      attributes[element.attributes[key].name] = element.attributes[key].value
    });

    try {
      node = new Node(uuid, title, path, attributes);
    } catch (e) {
      console.error("Invalid node");
    }
    return node;
  }

  /**
   * Calculate uuid path to xedit node
   */
  public static getUuidPath = function (element, rootTag = 'xedit', path = []) {
    var parent = element.parentNode;

    if (!isNil(element))
      path.unshift(element.getAttribute('xe_uuid') || element.getAttribute('xe_id'))

    return (element.nodeName.toLowerCase() == rootTag || isNil(parent)) ?
      path : this.getUuidPath(parent, rootTag, path);
  }

}
