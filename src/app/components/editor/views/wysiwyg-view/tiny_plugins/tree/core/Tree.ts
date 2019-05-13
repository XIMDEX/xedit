import { isEmpty, hasIn } from 'ramda';
import { XeditMapper } from '@models/schema/xedit-mapper';
/**
 * Dam.js
 */

const TAG_BY_TYPE = { 'image': 'img', 'link': 'a', 'video': 'video', 'iframe': 'iframe' };
const ATTR_BY_TAG = { 'img': 'src', 'a': 'href', 'video': 'src', 'iframe': 'src' };
const ATTRS_BY_TAG = {
    'img': ['alt', 'longdesc'],
    'a': ['target', 'title'],
    'video': ['longdesc', 'height', 'width'],
    'iframe': ['width', 'height']
};
const VALID_TAGS = Object.keys(ATTR_BY_TAG);

const isValidNodeId = function (nodeId) {
    return true;
};

function hasValidResource(tag, val, type) {
    const isValid = VALID_TAGS.includes(tag) && !isEmpty(val) && tag === TAG_BY_TYPE[type];
    return isValid;
}

const getId = function (editor, type) {

    const selectedNode = editor.selection.getNode();

    let tag = selectedNode.tagName.toLowerCase();
    let val = editor.dom.getAttrib(selectedNode, XeditMapper.TAG_LINK);

    if (type === 'video') {
        tag = 'video';
        val = editor.dom.getAttrib(selectedNode, 'data-mce-p-xe_link');
    } else if (type === 'iframe') {
        tag = 'iframe';
        val = editor.dom.getAttrib(selectedNode, 'data-mce-p-src');
    }
    /*const hasResource = this.hasValidResource(tag, val, type);
    const isDam = VALID_TAGS.includes(tag) && TAG_BY_TYPE[type] == tag && editor.dom.getAttrib(selectedNode, XeditMapper.TAG_LINK) !== '';
    const hasSource = VALID_TAGS.includes(tag) && editor.dom.getAttrib(selectedNode, ATTR_BY_TAG[tag]) !== '';*/

    return hasValidResource(tag, val, type) ? val : '';
};

const getAttribute = function (editor, attribute) {
    const defaultValues = {
        'alt': 'Texto alternativo'
    };

    let selectedNode = editor.selection.getNode();
    if (selectedNode.classList.contains('mce-object-iframe') && selectedNode.tagName.toLowerCase() !== 'iframe') {
        selectedNode = selectedNode.querySelector('iframe');
    }
    const attr = editor.dom.getAttrib(selectedNode, attribute);
    return isEmpty(attr) ? (hasIn(attribute, defaultValues) ? defaultValues[attribute] : '') : attr;
};

const getUrl = function (editor, nodeId) {
    const resourceUrl = editor.getParam('dam_url', editor.documentBaseUrl);
    let url = typeof (resourceUrl) === 'function' ? resourceUrl(nodeId) : resourceUrl + nodeId;
    if (((/^(f|ht)tps?:\/\//i).test(nodeId))) {
        url = nodeId;
    }
    return url;
};

const createHtmlVideo = function (text, resource) {
    const height = 'height' in resource && !isEmpty(resource['height']) ? resource['height'] : '100%';
    const width = 'width' in resource && !isEmpty(resource['width']) ? resource['width'] : '100%';
    // text = `<video xe_link="${resource['xe_link']}" lingkwidth="${width}" height="${height}" controls>`;
    text = `<source src="${resource['xe_link']}" type="video/mp4"/>Your browser does not support the video tag.`;
    // text += `</video>`;
    resource['width'] = `${width}`;
    resource['height'] = `${height}`;
    resource['controls'] = '';
    return [text, resource];
};

const insert = function (editor, nodeId, type, attributes) {
    const selectedNode = editor.selection.getNode();
    let tag = selectedNode.tagName.toLowerCase();
    const val = editor.dom.getAttrib(selectedNode, XeditMapper.TAG_LINK);
    const hasResource = hasValidResource(tag, val, type);
    const url = getUrl(editor, nodeId);

    if (hasResource) {
        selectedNode.setAttribute(XeditMapper.TAG_LINK, nodeId);
        selectedNode.setAttribute(ATTR_BY_TAG[tag], url);
        selectedNode.setAttribute('data-mce-src', url);
        ATTRS_BY_TAG[tag].forEach(key => {
            selectedNode.setAttribute(key, attributes[key]);
        });

    } else {
        // editor.focus();
        // editor.selection.collapse(true);

        tag = TAG_BY_TYPE[type];
        let resource = {
            xe_link: nodeId
        };
        ATTRS_BY_TAG[tag].forEach(key => {
            resource[key] = attributes[key];
        });

        resource[ATTR_BY_TAG[tag]] = url;

        let text = '';
        if (type === 'link') {
            if (!hasResource) {
                text = editor.selection.getContent();
            } else {
                text = resource['title'];
            }
        } else if (type === 'video') {
            [text, resource] = createHtmlVideo(text, resource);
            tag = 'video';
        }

        editor.execCommand('mceInsertContent', false, editor.dom.createHTML(tag, resource, text));
    }
};

export default {
    isValidNodeId,
    getId,
    getAttribute,
    insert
};
