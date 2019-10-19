/**
 * Plugin.js
 */

declare var tinymce: any;

import Commands from './api/Commands';
import FilterContent from './core/FilterContent';
import Buttons from './ui/Buttons';

tinymce.PluginManager.add('dam', function(editor, getInfo, callback) {
    FilterContent.setup(editor);
    Commands.register(editor, getInfo, callback);
    Buttons.register(editor);
});

export default function() {}
