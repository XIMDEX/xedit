/**
 * Plugin.js
 */

declare var tinymce: any;

import TreeCommands from './api/Commands';
import TreeFilterContent from './core/FilterContent';
import TreeButtons from './ui/Buttons';

tinymce.PluginManager.add('anchor', function (editor, http, callback) {
    TreeFilterContent.setup(editor);
    TreeCommands.register(editor, http);
    TreeButtons.register(editor);
});

export default function () { }
