import { hasIn, union, difference } from 'ramda';

export class XeditMapper {
    // EDITOR TYPES
    static TYPE_HTML = 'html';
    static TYPE_TEXT = 'text';
    static TYPE_DATE = 'date';

    // TAGS
    static TAG_EDITOR = 'xedit';
    static TAG_SECTION_TYPE = 'xe_section';
    static TAG_UUID = 'xe_uuid';
    static TAG_LINK = 'xe_link';

    // ATTRIBUTES
    static ATTR_HOVER = 'xe_hover';

    // UTILS
    static ATTR_SELECTED = 'xe_selected';
    static ATTR_WYSIWYG_SELECTED = 'xe_w_selected';
    static requiredXeditAttributes = [
        XeditMapper.TAG_SECTION_TYPE,
        XeditMapper.TAG_LINK,
    ];

    static ATTR_TYPES = {
        width: 'number',
        heigth: 'number',
    };

    // LINKS_TYPE
    static LINK_TYPES = {
        a: 'href',
        applet: 'codebase',
        area: 'href',
        base: 'href',
        blockquote: 'cite',
        del: 'cite',
        form: 'action',
        frame: 'src',
        head: 'profile',
        iframe: 'src',
        img: 'src',
        input: 'src',
        ins: 'cite',
        link: 'href',
        object: 'data',
        q: 'cite',
        script: 'src',
        audio: 'src',
        button: 'formaction',
        command: 'icon',
        embed: 'src',
        html: 'manifest',
        source: 'src',
        track: 'src',
        video: 'src',
    };

    // ATTRIBUTES
    static ATTRIBUTES = {
        xe_section: {
            filter_attributes: [],
            attributes: {
                reject: [],
                accept: [],
            },
        },
        xe_link: {
            filter_attributes: ['href', 'src'],
            attributes: {
                accept: ['xe_link'],
                reject: ['src', 'href'],
            },
        },
        img: {
            filter_attributes: [],
            attributes: {
                accept: ['src', 'height', 'width'],
                reject: [],
            },
        },
        video: {
            filter_attributes: [],
            attributes: {
                accept: ['src', 'height', 'width'],
                reject: [],
            },
        },
        '*': {
            attributes: {
                accept: ['id', 'class', 'style', 'title'],
            },
        },
    };

    /************************* PUBLIC METHODS *************************/
    public static getAvailableAttribute(
        name: string,
        tagName: string = null
    ): Array<string> {
        let attributes = XeditMapper.ATTRIBUTES['*'].attributes.accept;
        if (
            hasIn(name, XeditMapper.ATTRIBUTES) &&
            hasIn('attributes', XeditMapper.ATTRIBUTES[name])
        ) {
            if (hasIn('accept', XeditMapper.ATTRIBUTES[name].attributes)) {
                attributes = union(
                    attributes,
                    XeditMapper.ATTRIBUTES[name].attributes.accept
                );
            }
            if (tagName && hasIn(tagName, XeditMapper.ATTRIBUTES)) {
                if (
                    hasIn('accept', XeditMapper.ATTRIBUTES[tagName].attributes)
                ) {
                    attributes = union(
                        attributes,
                        XeditMapper.ATTRIBUTES[tagName].attributes.accept
                    );
                }
            }
            if (hasIn('reject', XeditMapper.ATTRIBUTES[name].attributes)) {
                attributes = difference(
                    attributes,
                    XeditMapper.ATTRIBUTES[name].attributes.reject
                );
            }
            if (tagName && hasIn(tagName, XeditMapper.ATTRIBUTES)) {
                if (
                    hasIn('reject', XeditMapper.ATTRIBUTES[tagName].attributes)
                ) {
                    attributes = difference(
                        attributes,
                        XeditMapper.ATTRIBUTES[tagName].attributes.reject
                    );
                }
            }
        }

        return attributes;
    }
}
