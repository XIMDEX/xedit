import { uniq, hasIn, isEmpty, equals, isNil, union } from 'ramda';
import { Xedit } from '../mappers/xedit';

export default class ToolbarGenerator {
    static STYLES_ALL = 'all';
    static TAGS_ALL = 'all';
    static groups = {
        group1: ['bold', 'italic', 'underline', 'strikethrough', 'color', 'background', 'math'],
        others: ['ol', 'ul', 'table'],
        align: ['alignleft', 'aligncenter', 'alignright', 'alignjustify'],
        indent: ['outdent', 'indent'],
        format: ['formatselect'],
        font: ['fontselect', 'fontsize']
    };

    public static generate(mapper: object, schema): string | boolean {
        let toolbar = '';
        if (hasIn('options', schema)) {
            if (hasIn('styles', schema.options)) {
                toolbar += this.toolbarStyles(mapper, schema.options.styles);
            }

            if (hasIn('tags', schema.options)) {
                toolbar += this.toolbarTags(schema.options.tags);
            }
        }

        toolbar = toolbar.trim();
        return !isEmpty(toolbar) ? toolbar : false;
    }

    private static toolbarStyles(mapper: object, styles: Array<string> | string): string {
        const stylesValue = {};
        const groupsFiltered = this.getGroupsFiltered(mapper);

        if (typeof styles === 'string') {
            styles = equals(styles, ToolbarGenerator.STYLES_ALL) ? Object.keys(groupsFiltered) : [];
        }

        styles.forEach(style => {
            if (hasIn(style, groupsFiltered)) {
                ToolbarGenerator.addValue(stylesValue, style, Object.values(groupsFiltered[style]));
            } else {
                for (const group in groupsFiltered) {
                    if (hasIn(style, groupsFiltered[group])) {
                        ToolbarGenerator.addValue(stylesValue, group, [groupsFiltered[group][style]]);
                    }
                }
            }
        });

        let result = '';
        for (const styleValue in stylesValue) {
            if (!isNil(stylesValue[styleValue])) {
                result += uniq(stylesValue[styleValue]).join(' ') + ' | ';
            }
        }

        return result.replace(/(\s\|\s)$/g, '');
    }

    private static getGroupsFiltered(mapper: object) {
        const filterGroups = {};
        for (const group of Object.keys(ToolbarGenerator.groups)) {
            for (const key of ToolbarGenerator.groups[group]) {
                if (hasIn(key, mapper)) {
                    if (!hasIn(group, filterGroups)) {
                        filterGroups[group] = {};
                    }
                    filterGroups[group][key] = mapper[key];
                }
            }
        }
        return filterGroups;
    }

    private static getToolBarBtns() {
        const type = Xedit.getDam();
        return {
            a: `${type}_link`,
            img: type,
            video: `${type}_video`,
            audio: `${type}_audio`
        };
    }

    private static toolbarTags(tags: Array<string> | string) {
        const tagsValue = {};
        const groups = {
            buttons: this.getToolBarBtns(),
            formats: {}
        };

        if (typeof tags === 'string') {
            tags = equals(tags, ToolbarGenerator.TAGS_ALL) ? Object.keys(groups) : [];
        } else {
            tags = Object.keys(tags);
        }

        tags.forEach(style => {
            if (hasIn(style, groups)) {
                ToolbarGenerator.addValue(tagsValue, style, Object.values(groups[style]));
            } else {
                for (const group in groups) {
                    if (hasIn(style, groups[group])) {
                        ToolbarGenerator.addValue(tagsValue, group, [groups[group][style]]);
                    }
                }
            }
        });

        let result = ' ';
        for (const tagValue in tagsValue) {
            if (equals(tagValue, 'buttons')) {
                result += uniq(tagsValue[tagValue]).join(' ');
            }
        }
        return result;
    }

    private static addValue(object: Object, property: string, value: Array<string> | string) {
        if (hasIn(property, object)) {
            object[property] = union(object[property], value);
        } else {
            object[property] = value;
        }
    }
}
