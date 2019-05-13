import Dialog from '../ui/Dialog';

const register = function (editor, http) {
    editor.addCommand('mceTree', function () {
        Dialog.open(editor, http, 'image');
    });

    editor.addCommand('mceTreeLink', function () {
        Dialog.open(editor, http, 'link');
    });

    editor.addCommand('mceTreeVideo', function () {
        Dialog.open(editor, http, 'video');
    });

    editor.addCommand('mceTreeIframe', function () {
        Dialog.open(editor, http, 'iframe');
    });
};

export default {
    register,
};
