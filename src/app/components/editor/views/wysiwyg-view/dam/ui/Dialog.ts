/**
 * Dialog.js
 */

import Dam from '../core/Dam';

const insertDam = function (editor, newId) {
    if (!Dam.isValidNodeId(newId)) {
        editor.windowManager.alert(
            'Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores.'
        );
        return true;
    } else {
        Dam.insert(editor, newId);
        return false;
    }
};

const open = function (editor) {
    const currentId = Dam.getId(editor);

    editor.windowManager.open({
        title: 'Dam',
        body: { type: 'textbox', name: 'nodeId', size: 40, label: 'Nodeid', value: currentId },
        onsubmit(e) {
            const newNodeId = e.data.nodeId;

            if (insertDam(editor, newNodeId)) {
                e.preventDefault();
            }
        }
    });
};

export default {
    open
};
