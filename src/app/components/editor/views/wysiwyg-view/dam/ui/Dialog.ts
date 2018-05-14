/**
 * Dialog.js
 */

import Dam from '../core/Dam';
import { Api } from '@app/api';
import { HttpClient } from '@angular/common/http';

const ATTRS_BY_TYPE = {
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

const insertDam = function(editor, newId, type, extra) {
    if (!Dam.isValidNodeId(newId)) {
        editor.windowManager.alert('El enlace elegido no es válido');
        return true;
    } else {
        Dam.insert(editor, newId, type, extra);
        return false;
    }
};

const open = function(editor, http: HttpClient, type: string) {
    const currentId = Dam.getId(editor, type);
    const attributes = {};

    for (let attr in ATTRS_BY_TYPE[type]) {
        attributes[attr] = Dam.getAttribute(editor, attr);
    }

    const save = e => {
        const newNodeId = e.data.nodeId;
        const extra = {};

        for (let key in ATTRS_BY_TYPE[type]) {
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

    function setData(result, extra) {
        let id = result && result.nodeid ? result.nodeid : '';
        let name = result && result.name ? result.name : '';
        let path = '<i>Elemento no seleccionado...</i>';
        if (result && result.path) {
            path = Object.values(result.path).join('/');
            path = `<span title="${path}">${path}<span/>`;
        }

        let pathIds = result && result.path ? Object.keys(result.path) : [];

        document.getElementById('dam-nodeId')['value'] = id;
        document.getElementById('dam-name')['innerHTML'] = name;
        document.getElementById('dam-path')['innerHTML'] = path;
    }
    function showWManager(result, { editor }) {
        let name =
            result && result.name
                ? result.name
                : '<i>Elemento no seleccionado...</i>';
        let path = '<i>Elemento no seleccionado...</i>';
        if (result && result.path) {
            path = Object.values(result.path).join('/');
            path = `<span title="${path}">${path}<span/>`;
        }
        let pathIds = result && result.path ? Object.keys(result.path) : [];

        let form = {
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
        for (let key in ATTRS_BY_TYPE[type]) {
            let obj = ATTRS_BY_TYPE[type][key];
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
