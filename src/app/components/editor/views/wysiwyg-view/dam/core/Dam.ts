import { isNil, isEmpty, hasIn } from 'ramda';
import { XeditMapper } from '@models/schema/xedit-mapper';
/**
 * Dam.js
 */

const TAG_BY_TYPE = { 'image': 'img', 'link': 'a' };
const ATTR_BY_TAG = { 'img': 'src', 'a': 'href' };
const ATTRS_BY_TAG = { 'img': ['alt', 'longdesc'], 'a': ['target', 'title'] }
const VALID_TAGS = Object.keys(ATTR_BY_TAG);

const isValidNodeId = function (nodeId) {
    return true;
};

function hasValidResource(tag, val, type) {
    let isValid = VALID_TAGS.includes(tag) && !isEmpty(val) && tag == TAG_BY_TYPE[type];
    return isValid;
}

const getId = function (editor, type) {
    const selectedNode = editor.selection.getNode();
    const tag = selectedNode.tagName.toLowerCase();
    const val = editor.dom.getAttrib(selectedNode, XeditMapper.TAG_LINK);
    /*const hasResource = this.hasValidResource(tag, val, type);
    const isDam = VALID_TAGS.includes(tag) && TAG_BY_TYPE[type] == tag && editor.dom.getAttrib(selectedNode, XeditMapper.TAG_LINK) !== '';
    const hasSource = VALID_TAGS.includes(tag) && editor.dom.getAttrib(selectedNode, ATTR_BY_TAG[tag]) !== '';*/

    return hasValidResource(tag, val, type) ? val : '';
};

const getAttribute = function (editor, attribute) {
    const defaultValues = {
        'alt': 'Texto alternativo'
    };
    const selectedNode = editor.selection.getNode();
    const attr = editor.dom.getAttrib(selectedNode, attribute);
    return isEmpty(attr) ? (hasIn(attribute, defaultValues) ? defaultValues[attribute] : '') : attr;
};

function getUrl(editor, nodeId) {
    const resourceUrl = editor.getParam('dam_url', editor.documentBaseUrl);
    let url = resourceUrl + nodeId;
    if (((/^(f|ht)tps?:\/\//i).test(nodeId))) {
        url = nodeId;
    }
    return url;
}

const insert = function (editor, nodeId, type, attributes) {

    const selectedNode = editor.selection.getNode();
    const tag = selectedNode.tagName.toLowerCase();
    const val = editor.dom.getAttrib(selectedNode, XeditMapper.TAG_LINK);
    const hasResource = hasValidResource(tag, val, type);
    let url = getUrl(editor, nodeId);

    if (hasResource) {
        selectedNode.setAttribute(XeditMapper.TAG_LINK, nodeId);
        selectedNode.setAttribute(ATTR_BY_TAG[tag], url);
        ATTRS_BY_TAG[tag].forEach(key => {
            selectedNode.setAttribute(key, attributes[key]);
        });

    } else {
        //editor.focus();
        //editor.selection.collapse(true);

        let tag = TAG_BY_TYPE[type];
        let resource = {
            xe_link: nodeId
        }
        ATTRS_BY_TAG[tag].forEach(key => {
            resource[key] = attributes[key];
        });

        resource[ATTR_BY_TAG[tag]] = url;

        let text = '';
        if (type == 'link') {
            if (!hasResource) {
                text = editor.selection.getContent();
            } else {
                text = resource['title'];
            }
        }

        editor.execCommand('mceInsertContent', false, editor.dom.createHTML(TAG_BY_TYPE[type], resource, text));
    }
};

export default {
    isValidNodeId,
    getId,
    getAttribute,
    insert
};
