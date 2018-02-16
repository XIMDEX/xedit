import { XeditMapper } from '@models/schema/xedit-mapper';
/**
 * Dam.js
 */
const isValidNodeId = function (nodeId) {
    return true;
};

const getId = function (editor) {
    const selectedNode = editor.selection.getNode();
    const isDam = selectedNode.tagName === 'IMG' && editor.dom.getAttrib(selectedNode, XeditMapper.TAG_IMAGE) !== '';
    const isSrc = selectedNode.tagName === 'IMG' && editor.dom.getAttrib(selectedNode, 'src') !== '';

    return isDam ? selectedNode.getAttribute(XeditMapper.TAG_IMAGE) : isSrc ? selectedNode.getAttribute('src') : '';
};

const insert = function (editor, nodeId) {
    const resourceUrl = editor.getParam('dam_url', editor.documentBaseUrl);
    const selectedNode = editor.selection.getNode();
    const isDam = selectedNode.tagName === 'IMG';
    let url = resourceUrl + nodeId;

    if (((/^(f|ht)tps?:\/\//i).test(nodeId))) {
        url = nodeId;
    }

    if (isDam) {
        selectedNode.setAttribute(XeditMapper.TAG_IMAGE, nodeId);
        selectedNode.setAttribute('src', url);
    } else {
        editor.focus();
        editor.selection.collapse(true);

        editor.execCommand('mceInsertContent', false, editor.dom.createHTML('img', {
            xe_img: nodeId,
            src: url
        }));
    }
};

export default {
    isValidNodeId,
    getId,
    insert
};
