/**
 * Buttons.js
 */

const register = function (editor) {

    editor.addButton('dam', {
        icon: 'media',
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

    editor.addMenuItem('dam', {
        icon: 'media',
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
};

export default {
    register
};
