/**
 * Dialog.js
 */

import Tree from '@app/components/editor/views/wysiwyg-view/tiny_plugins/tree/core/Tree';
import { Api } from '@app/api';
import { HttpClient } from '@angular/common/http';

const ATTRS_BY_TYPE = {
    video: {
        longdesc: {
            type: 'textbox',
            name: 'longdesc',
            size: 20,
            label: 'Descripción',
        },
        width: {
            type: 'textbox',
            name: 'width',
            size: 40,
            label: 'Anchura',
        },
        height: {
            type: 'textbox',
            name: 'height',
            size: 40,
            label: 'Altura',
        }
    },
    image: {
        alt: { type: 'textbox', name: 'alt', size: 40, label: 'Alternativo' },
        longdesc: {
            type: 'textbox',
            name: 'longdesc',
            size: 40,
            label: 'Descripción',
        },
    },
    link: {
        title: { type: 'textbox', name: 'title', size: 40, label: 'Título' },
        target: {
            type: 'listbox',
            name: 'target',
            label: 'Target',
            values: [
                { text: 'Nueva ventana', value: '_blank' },
                { text: 'Misma ventana', value: '_self' },
            ],
        },
    },
};

const insertDam = function (editor, newId, type, extra) {
    if (!Tree.isValidNodeId(newId)) {
        editor.windowManager.alert('El enlace elegido no es válido');
        return true;
    } else {
        Tree.insert(editor, newId, type, extra);
        return false;
    }
};

const open = function (editor, http: HttpClient, type: string) {
    const currentId = Tree.getId(editor, type);
    const attributes = {};

    for (const attr of Object.keys(ATTRS_BY_TYPE[type])) {
        attributes[attr] = Tree.getAttribute(editor, attr);
    }

    const save = e => {
        const newNodeId = e.data.nodeId;
        const extra = {};

        for (const key of Object.keys(ATTRS_BY_TYPE[type])) {
            extra[key] = e.data[key];
        }

        if (insertDam(editor, newNodeId, type, extra)) {
            e.preventDefault();
        }
    };

    function openTree(evt, windowM, pathIds) {
        window['treeModal']
            .openModal('modal-1', type, pathIds)
            .then(selectedId => {
                Api.getInfoNode(http, selectedId, type, setData, null, null);
            })
            .catch(err => console.log(err));
    }

    function setData({ response: result }, extra) {
        const id = result && result.nodeid ? result.nodeid : '';
        const name = result && result.name ? result.name : '';
        let path = '<i>Elemento no seleccionado...</i>';
        if (result && result.path) {
            path = Object.values(result.path).join('/');
            path = `<span title="${path}">${path}<span/>`;
        }

        const pathIds = result && result.path ? Object.keys(result.path) : [];
        document.getElementById('dam-nodeId')['value'] = id;
        document.getElementById('dam-name')['innerHTML'] = name;
        document.getElementById('dam-path')['innerHTML'] = path;
    }
    function showWManager({response: result}, { editor }) {
        const name =
            result && result.name
                ? result.name
                : '<i>Elemento no seleccionado...</i>';
        let path = '<i>Elemento no seleccionado...</i>';
        if (result && result.path) {
            path = Object.values(result.path).join('/');
            path = `<span title="${path}">${path}<span/>`;
        }
        const pathIds = result && result.path ? Object.keys(result.path) : [];

        const form = {
            title: 'Dam',
            body: [],
            onsubmit(e) {
                save(e);
            },
        };
        form.body.push({
            type: 'container',
            label: 'Enlace',
            layout: 'flow',
            direction: 'row',
            align: 'center',
            maxHeight: 50,
            height: 30,
            items: [
                {
                    id: 'dam-nodeId',
                    type: 'textbox',
                    name: 'nodeId',
                    label: 'textbox',
                    value: currentId,
                    required: true,
                },
                {
                    type: 'button',
                    icon: 'browse',
                    onclick: e => openTree(e, editor.windowManager, pathIds),
                },
            ],
        });
        form.body.push({
            type: 'container',
            label: 'Nombre',
            id: 'dam-name',
            html: name,
        });
        form.body.push({
            type: 'container',
            label: 'Path',
            id: 'dam-path',
            html: path,
        });

        // Attributes
        for (const key of Object.keys(ATTRS_BY_TYPE[type])) {
            const obj = ATTRS_BY_TYPE[type][key];
            obj['value'] = attributes[key];
            form.body.push(obj);
        }

        editor.windowManager.open(form);
    }
    if (currentId) {
        Api.getInfoNode(http, currentId, type, showWManager, showWManager, {
            editor: editor,
        });
    } else {
        showWManager(null, { editor: editor });
    }
};

export default {
    open,
};
