/**
 * Buttons.js
 */

const register = function (editor) {

    editor.addButton('dam', {
        icon: 'media',
        tooltip: 'DAM',
        cmd: 'mceDam',
        stateSelector: 'img[xe_link]'
    });

    editor.addMenuItem('dam', {
        icon: 'media',
        text: 'DAM',
        context: 'insert',
        cmd: 'mceDam'
    });
};

export default {
    register
};
