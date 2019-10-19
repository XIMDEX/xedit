import Dialog from '../ui/Dialog';
import { hasIn } from 'ramda';

const register = function(editor, getInfo, callback) {
    editor.addCommand('mceDam', function() {
        if (hasIn('dam_callback', editor.settings)) {
            editor.settings.dam_callback('image');
        }
        // Dialog.open(editor, 'image', getInfo, callback);
    });

    editor.addCommand('mceDamLink', function() {
        Dialog.open(editor, 'link', getInfo, callback);
    });

    editor.addCommand('mceDamVideo', function() {
        Dialog.open(editor, 'video', getInfo, callback);
    });
};

export default {
    register
};
