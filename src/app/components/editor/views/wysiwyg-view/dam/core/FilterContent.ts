/**
 * FilterContent.js
 *
 */

const isDamNode = function (node) {
    return node.name.toLowerCase() !== 'img';
};

const setContentEditable = function (state) {
    return function (nodes) {
        for (let i = 0; i < nodes.length; i++) {
            if (isDamNode(nodes[i])) {
                nodes[i].attr('contenteditable', state);
            }
        }
    };
};

const setup = function (editor) {
    editor.on('PreInit', function () {
        editor.parser.addNodeFilter('a', setContentEditable('false'));
        editor.serializer.addNodeFilter('a', setContentEditable(null));
    });
};

export default {
    setup
};
