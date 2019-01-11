import { Component, OnInit, OnDestroy } from '@angular/core';

import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { BlurEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { XeditBaseComponent } from '../xedit.base.component';
import { isNil, hasIn, equals, union, uniq } from 'ramda';


@Component({
    selector: 'app-ckeditor',
    templateUrl: './ckeditor.component.html',
    styleUrls: ['./ckeditor.component.scss']
})
export class CkeditorComponent extends XeditBaseComponent implements OnInit, OnDestroy {

    public editor;
    private toolbarMenu;
    private config = {};
    private availabelPlugins = []

    constructor() { 
        super();
    }

    ngOnInit() {
        this.editor = DecoupledEditor;
        this.toolbarMenu = document.querySelector('#toolbar');
        this.config['extraPlugins'] = [];
        this.config['toolbar'] = this.generateToolbar();
    }

    ngOnDestroy() {
        this.editor = null;
    }

    onBlur({ editor: evt }: BlurEvent) {
        const { uuid } = this.content;
        const { element: srcElement, sourceElement } = evt;

        const element = isNil(srcElement) ? sourceElement : srcElement;

        this.onChange.emit({
            uuid,
            element, 
            content: evt.getData()
        });
        this.selectNode.emit(null);
        this.toolbarMenu.removeChild(evt.ui.view.toolbar.element);
    }

    onFocus({ editor }) {
        const { uuid } = this.content;
        this.selectNode.emit(uuid);
        this.toolbarMenu.appendChild(editor.ui.view.toolbar.element);
    }

    onClick(evt: MouseEvent) {
        evt.stopPropagation();
        this.toolbar.emit(null);
    }

    private generateToolbar() {
        let toolbar = [];
        const options = this.content.settings.options;
        const { styles } = options;

        if (!isNil(styles)) {
            toolbar = toolbar.concat(this.toolbarStyles(styles));
        }
        return toolbar;
    }

    private toolbarStyles(styles: Array<string> | string) {
        const stylesValue = {};
        const groups = {
            group1: {
                bold: 'bold',
                italic: 'italic',
                underline: 'underline',
                strikethrough: 'strikethrough',
                // color: 'color',
                // background: 'background',
            },
            others: {
                ol: 'numberedList',
                ul: 'bulletedList',
                table: 'insertTable',
            },
            align: {
                alignleft: 'alignment:left',
                aligncenter: 'alignment:center',
                alignright: 'alignment:right',
                alignjustify: 'alignment:justify',
            },
            // indent: {
            //     outdent: 'outdent',
            //     indent: 'indent',
            // },
            // format: {
            //     formatselect: 'formatselect',
            // },
            font: {
                fontselect: 'fontFamily',
                fontsize: 'fontSize',
            },
        };

        if (typeof styles === 'string') {
            styles = equals(styles, 'all')
                ? Object.keys(groups)
                : [];
        }

        styles.forEach(style => {
            if (hasIn(style, groups)) {
                this.addValue(
                    stylesValue,
                    style,
                    Object.values(groups[style])
                );
            } else {
                for (const group in groups) {
                    if (hasIn(style, groups[group])) {
                        this.addValue(stylesValue, group, [
                            groups[group][style],
                        ]);
                    }
                }
            }
        });

        let result = [];
        for (const styleValue in stylesValue) {
            if (!isNil(stylesValue[styleValue])) {
                result = result.concat(uniq(stylesValue[styleValue]), ['|']);
            }
        }

        for (const value of result) {
            this.addPluginSettings(value);
        }

        return result;
    }

    private addValue(
        object: Object,
        property: string,
        value: Array<string> | string
    ) {
        if (hasIn(property, object)) {
            object[property] = union(object[property], value);
        } else {
            object[property] = value;
        }
    }

    private addPlugin(plugin: string) {
        for (const plug of this.availabelPlugins) {
            const name = (typeof plug === 'string') ? plug.toLowerCase() : plug.pluginName.toLowerCase();
            if (name === plugin.toLowerCase()) {
                this.config['extraPlugins'].push(plug);
                break;
            }
        }
    }

    private addPluginSettings(plugin: string) {
        this.addPlugin(plugin);
        if (hasIn(plugin, this) && typeof this[plugin] === 'function') {
            this.config[plugin] = this[plugin]();
        }
    }

    private fontSize() {
        return {
            options: [
                '9pt',
                '11pt',
                '13pt',
                '14pt',
                '17pt',
                '19pt',
                '21pt'
            ]
        }
    }

    private fontFamily() {
        const fonts = [
            'default',
            'Arial, Helvetica, sans-serif',
            'Courier New, Courier, monospace',
            'Georgia, serif',
            'Lucida Sans Unicode, Lucida Grande, sans-serif',
            'Tahoma, Geneva, sans-serif',
            'Times New Roman, Times, serif',
            'Trebuchet MS, Helvetica, sans-serif',
            'Verdana, Geneva, sans-serif'
        ];

        return fonts;
    }

}
