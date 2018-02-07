import Dialog from '../ui/Dialog';

const register = function (editor) {
    editor.addCommand('mceDam', function () {
        Dialog.open(editor);
    });
};

export default {
    register
};
