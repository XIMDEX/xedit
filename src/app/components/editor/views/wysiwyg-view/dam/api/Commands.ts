import Dialog from '../ui/Dialog';

const register = function (editor, http) {
    editor.addCommand('mceDam', function () {
        Dialog.open(editor, http, 'image');
    });

    editor.addCommand('mceDamLink', function () {
        Dialog.open(editor, http, 'link');
    });
};

export default {
    register
};
