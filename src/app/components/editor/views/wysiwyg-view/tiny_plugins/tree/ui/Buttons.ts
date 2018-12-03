/**
 * Buttons.js
 */

const register = function (editor) {

    editor.addButton('tree', {
        icon: 'image',
        tooltip: 'Tree image',
        cmd: 'mceTree',
        stateSelector: 'img[xe_link]'
    });

    editor.addButton('tree_link', {
        icon: 'link',
        tooltip: 'Tree link',
        cmd: 'mceTreeLink',
        stateSelector: 'a[xe_link]'
    });

    editor.addButton('tree_video', {
        icon: 'media',
        tooltip: 'Tree video',
        cmd: 'mceTreeVideo',
        stateSelector: 'img[data-mce-object="video"]'
    });

    editor.addMenuItem('tree', {
        icon: 'image',
        text: 'Tree',
        context: 'insert',
        cmd: 'mceTree'
    });

    editor.addMenuItem('tree_link', {
        icon: 'link',
        text: 'DAM link',
        context: 'insert',
        cmd: 'mceTreeLink'
    });

    editor.addMenuItem('tree_video', {
        icon: 'video',
        text: 'DAM video',
        context: 'insert',
        cmd: 'mceTreeVideo'
    });
};

export default {
    register
};
