/**
 * Dialog.js
 */

import Dam from '../core/Dam';

const insertDam = function (editor, newId, extra) {
    if (!Dam.isValidNodeId(newId)) {
        editor.windowManager.alert(
            'El enlace elegido no es válido'
        );
        return true;
    } else {
        Dam.insert(editor, newId, extra);
        return false;
    }
};

const open = function (editor) {
    const currentId = Dam.getId(editor);
    const title = Dam.getTitle(editor);
    const description = Dam.getDescription(editor);

    const save = (e) => {
        const newNodeId = e.data.nodeId;
        const extra = {
            'title': e.data.title,
            'description': e.data.description
        }

        if (insertDam(editor, newNodeId, extra)) {
            e.preventDefault();
        }
    }
    editor.windowManager.open({
        title: 'Dam',
        body: [
            {
                type: 'container',
                label: 'Enlace',
                layout: 'flow',
                direction: 'row',
                align: 'center',
                maxHeight: 50,
                height: 30,
                items: [
                    { type: 'textbox', name: 'nodeId', label: 'textbox', value: currentId },
                    /*{ type: 'button', icon: 'browse' },*/
                ]
            },
            { type: 'textbox', name: 'title', size: 40, label: 'Alternativo', value: title },
            { type: 'textbox', name: 'description', size: 40, label: 'Descripción', value: description }
        ],
        onsubmit(e) {
            console.log(e)
            save(e);
        }
    });
};

export default {
    open
};
