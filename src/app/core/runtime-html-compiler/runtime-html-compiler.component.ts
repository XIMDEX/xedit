import { isNil } from 'ramda';
import { RuntimeModule } from './runtime-module';

import {
    ComponentFactory,
    ComponentRef,
    ViewChild,
    ViewContainerRef,
    Input,
    OnInit,
    OnDestroy,
    Output,
    EventEmitter,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import { Compiler, Component, NgModule, ModuleWithComponentFactories } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarI } from '@app/models/interfaces/ToolbarI';

@Component({
    selector: 'runtime-html-compiler',
    template: `
        <div #container></div>
    `
})
export class RuntimeHtmlCompiler implements OnInit, OnDestroy {
    @Output() selectNode: EventEmitter<string> = new EventEmitter();
    @Output() onChange: EventEmitter<{}> = new EventEmitter();
    @Output() toolbar: EventEmitter<{}> = new EventEmitter();

    @Input() xe_uuid: string;
    @Input() html: string;
    @Input() data: {};

    private compileRetry = 0;

    @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

    protected selector: string = 'runtime-html';
    // protected runtimeCompClass: any = RuntimeComponent;
    protected compRef: ComponentRef<{}>;
    protected module: ModuleWithComponentFactories<any>;

    constructor(private compiler: Compiler) {}

    ngOnInit() {
        const factory = this.compile();
        this.viewRef(factory);
    }

    ngOnDestroy() {
        this.destroy();
    }

    changeSelection(uuid: string) {
        this.selectNode.emit(uuid);
    }

    changeContent(data: {}) {
        this.onChange.emit(data);
    }

    changeToolbar(toolbar: Array<ToolbarI>) {
        this.toolbar.emit(toolbar);
    }

    public compile(): ComponentFactory<any> {
        if (isNil(this.html)) {
            this.html = 'undefined';
        }

        this.html = `
        <xedit
            xe_uuid="${this.xe_uuid}"
        >
            ${this.html}
        </xedit>`;

        const metadata = {
            selector: this.selector,
            template: this.html,
            outputs: ['selectNode', 'onChange', 'toolbar'],
            inputs: ['xeUuid']
        };

        this.destroy();

        return this.load(metadata);
    }

    public viewRef(compFactory: ComponentFactory<any>): RuntimeHtmlCompiler {
        this.compRef = this.container.createComponent(compFactory);

        this.compRef.instance['selectNode'].subscribe($event => this.changeSelection($event));
        this.compRef.instance['onChange'].subscribe($event => this.changeContent($event));
        this.compRef.instance['toolbar'].subscribe($event => this.changeToolbar($event));

        this.setComponentProps({ data: this.data });

        return this;
    }

    public setComponentProps(props: object) {
        for (const prop in props) {
            this.compRef.instance[prop] = props[prop];
        }
    }

    public destroy() {
        if (this.compRef) {
            this.compRef.destroy();
            this.compRef = null;
        }
    }

    protected load(metadata: object): ComponentFactory<any> {
        const decoratorComp = Component(metadata)(
            class RuntimeComponent {
                public data: Object;
                public selected: string;

                public selectNode: EventEmitter<string> = new EventEmitter();
                public onChange: EventEmitter<{}> = new EventEmitter();
                public toolbar: EventEmitter<Array<ToolbarI>> = new EventEmitter();

                changeSelection(uuid: string) {
                    this.selected = uuid;
                    this.selectNode.emit(uuid);
                }

                changeContent(data: {}) {
                    this.onChange.emit(data);
                }

                changeToolbar(toolbarOptions: Array<ToolbarI>) {
                    this.toolbar.emit(toolbarOptions);
                }
            }
        );

        @NgModule({
            imports: [RuntimeModule, CommonModule],
            declarations: [decoratorComp],
            schemas: [NO_ERRORS_SCHEMA]
        })
        class RuntimeComponentModule {}

        try {
            this.module = this.compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
            return this.module.componentFactories.find(f => f.componentType === decoratorComp);
        } catch (ex) {
            this.compileRetry++;
            const message = 'Failed to compile the template please use the "text view"';
            console.error(message, ex, this.html);
            this.html = `<div style="padding:50px; color:red;">${message}</div>`;

            if (this.compileRetry < 3) {
                return this.compile();
            }
            throw new Error('Failed to compile the template please use the "text view"');
        }
    }
}
