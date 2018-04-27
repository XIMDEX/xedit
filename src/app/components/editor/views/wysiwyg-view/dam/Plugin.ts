/**
 * Plugin.js
 */

declare var tinymce: any;

import Commands from './api/Commands';
import FilterContent from './core/FilterContent';
import Buttons from './ui/Buttons';

tinymce.PluginManager.add('anchor', function (editor, http) {
    FilterContent.setup(editor);
    Commands.register(editor, http);
    Buttons.register(editor);
});

export default function () { }
