import { XeditMapper } from '../../../../models/schema/xedit-mapper';
/**
 * Dam.js
 */
const isValidNodeId = function (nodeId) {
    return true;
}

const getId = function (editor) {
    const selectedNode = editor.selection.getNode();
    const isDam = selectedNode.tagName === 'IMG' && editor.dom.getAttrib(selectedNode, XeditMapper.TAG_IMAGE) !== '';
    return isDam ? selectedNode.getAttribute(XeditMapper.TAG_IMAGE) : '';
};

const insert = function (editor, nodeId) {
    const url = 'http://ajlucena.com/ximdex-4/public_xmd/?action=filemapper&method=nodeFromExpresion&expresion='//10135
    const selectedNode = editor.selection.getNode();
    const isDam = selectedNode.tagName === 'IMG' && editor.dom.getAttrib(selectedNode, XeditMapper.TAG_IMAGE) !== '';
    if (isDam) {
        selectedNode.setAttribute(XeditMapper.TAG_IMAGE, nodeId)
        selectedNode.setAttribute('src', url + nodeId)
    } else {
        editor.focus();
        editor.selection.collapse(true);
        editor.execCommand('mceInsertContent', false, editor.dom.createHTML('img', {
            xe_img: nodeId,
            src: url + nodeId
        }));
    }
};

export default {
    isValidNodeId,
    getId,
    insert
};