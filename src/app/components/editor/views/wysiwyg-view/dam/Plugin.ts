/**
 * Plugin.js
 */

declare var tinymce: any;

import Commands from './api/Commands';
import FilterContent from './core/FilterContent';
import Buttons from './ui/Buttons';

tinymce.PluginManager.add('anchor', function (editor) {
    FilterContent.setup(editor);
    Commands.register(editor);
    Buttons.register(editor);
});

export default function () { }
