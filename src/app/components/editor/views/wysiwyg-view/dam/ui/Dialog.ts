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
    const alt = Dam.getAlt(editor);
    const longdesc = Dam.getLongdesc(editor);

    const save = (e) => {
        const newNodeId = e.data.nodeId;
        const extra = {
            'alt': e.data.alt,
            'longdesc': e.data.longdesc
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
            { type: 'textbox', name: 'alt', size: 40, label: 'Alternativo', value: alt },
            { type: 'textbox', name: 'longdesc', size: 40, label: 'Descripción', value: longdesc }
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
