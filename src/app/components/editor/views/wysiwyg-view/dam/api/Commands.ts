import Dialog from '../ui/Dialog';

const register = function (editor, getInfo, callback) {
    editor.addCommand('mceDam', function () {
        Dialog.open(editor, 'image', getInfo, callback);
    });

    editor.addCommand('mceDamLink', function () {
        Dialog.open(editor, 'link', getInfo, callback);
    });

    editor.addCommand('mceDamVideo', function () {
        Dialog.open(editor, 'video', getInfo, callback);
    });
};

export default {
    register,
};
