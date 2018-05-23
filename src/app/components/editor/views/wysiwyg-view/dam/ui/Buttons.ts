/**
 * Buttons.js
 */

const register = function (editor) {

    editor.addButton('dam', {
        icon: 'image',
        tooltip: 'DAM image',
        cmd: 'mceDam',
        stateSelector: 'img[xe_link]'
    });

    editor.addButton('dam_link', {
        icon: 'link',
        tooltip: 'DAM link',
        cmd: 'mceDamLink',
        stateSelector: 'a[xe_link]'
    });

    editor.addButton('dam_video', {
        icon: 'media',
        tooltip: 'DAM video',
        cmd: 'mceDamVideo',
        stateSelector: 'video[xe_link]'
    });

    editor.addMenuItem('dam', {
        icon: 'image',
        text: 'DAM',
        context: 'insert',
        cmd: 'mceDam'
    });

    editor.addMenuItem('dam_link', {
        icon: 'link',
        text: 'DAM link',
        context: 'insert',
        cmd: 'mceDamLink'
    });

    editor.addMenuItem('dam_video', {
        icon: 'video',
        text: 'DAM video',
        context: 'insert',
        cmd: 'mceDamVideo'
    });
};

export default {
    register
};
