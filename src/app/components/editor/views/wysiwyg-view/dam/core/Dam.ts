import { isNil, isEmpty } from 'ramda';
import { XeditMapper } from '@models/schema/xedit-mapper';
/**
 * Dam.js
 */
const isValidNodeId = function (nodeId) {
    return true;
};

const getId = function (editor) {
    const selectedNode = editor.selection.getNode();
    const isDam = selectedNode.tagName === 'IMG' && editor.dom.getAttrib(selectedNode, XeditMapper.TAG_LINK) !== '';
    const isSrc = selectedNode.tagName === 'IMG' && editor.dom.getAttrib(selectedNode, 'src') !== '';

    return isDam ? selectedNode.getAttribute(XeditMapper.TAG_LINK) : isSrc ? selectedNode.getAttribute('src') : '';
};

const getAlt = function (editor) {
    const selectedNode = editor.selection.getNode();
    const alt = editor.dom.getAttrib(selectedNode, 'alt');
    return isEmpty(alt) ? 'Image' : alt;
};

const getLongdesc = function (editor) {
    const selectedNode = editor.selection.getNode();
    return editor.dom.getAttrib(selectedNode, 'longdesc');
};

const insert = function (editor, nodeId, { alt, longdesc }) {
    const resourceUrl = editor.getParam('dam_url', editor.documentBaseUrl);
    const selectedNode = editor.selection.getNode();
    const isDam = selectedNode.tagName === 'IMG';
    let url = resourceUrl + nodeId;

    if (((/^(f|ht)tps?:\/\//i).test(nodeId))) {
        url = nodeId;
    }

    if (isDam) {
        selectedNode.setAttribute(XeditMapper.TAG_LINK, nodeId);
        selectedNode.setAttribute('src', url);
        selectedNode.setAttribute('alt', alt);
        selectedNode.setAttribute('description', longdesc);
    } else {
        editor.focus();
        editor.selection.collapse(true);

        editor.execCommand('mceInsertContent', false, editor.dom.createHTML('img', {
            xe_link: nodeId,
            src: url,
            alt,
            longdesc
        }));
    }
};

export default {
    isValidNodeId,
    getId,
    getAlt,
    getLongdesc,
    insert
};
