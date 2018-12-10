/**
 * Dialog.js
 */

import Dam from '../core/Dam';
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
    if (!Dam.isValidNodeId(newId)) {
        editor.windowManager.alert('El enlace elegido no es válido');
        return true;
    } else {
        Dam.insert(editor, newId, type, extra);
        return false;
    }
};

const open = function (editor, type: string, getInfo, callback) {
    const currentId = Dam.getId(editor, type);
    const attributes = {};

    for (const attr of Object.keys(ATTRS_BY_TYPE[type])) {
        attributes[attr] = Dam.getAttribute(editor, attr);
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

    // function openTree(evt, windowM, pathIds) {
    //     window['treeModal']
    //         .openModal('modal-1', type, pathIds)
    //         .then(selectedId => {
    //             Api.getInfoNode(http, selectedId, type, setData, null, null);
    //         })
    //         .catch(err => console.log(err));
    // }

    function setData(result, extra) {
        const id = result && result.nodeid ? result.nodeid : '';
        const name = result && result.name ? result.name : '';
        let path = '<i>Elemento no seleccionado...</i>';
        if (result && result.path) {
            path = Object.values(result.path).join('/');
            path = `<span title="${path}">${path}<span/>`;
        }

        document.getElementById('dam-nodeId')['value'] = id;
        document.getElementById('dam-name')['innerHTML'] = name;
        document.getElementById('dam-path')['innerHTML'] = path;
    }
    function showWManager(result, { editor: ed }) {
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
                    onclick: e => callback(e, ed.windowManager, type, pathIds, setData),
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

        ed.windowManager.open(form);
    }
    showWManager(null, { editor: editor });
    if (currentId && !(/^(f|ht)tps?:\/\//i).test(currentId)) {
        getInfo(currentId, type, setData, showWManager, showWManager, {
            editor: editor,
        });
    }
};

export default {
    open,
};
