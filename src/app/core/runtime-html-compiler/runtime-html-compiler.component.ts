import { isNil, construct } from 'ramda';
import { RuntimeModule } from './runtime-module';

import { ComponentFactory, ComponentRef, ViewChild, ViewContainerRef, Input, OnInit, OnDestroy, Output, EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';
import { Compiler, Component, NgModule, ModuleWithComponentFactories } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionComponent } from '@app/elements/forms/dynform/section/section.component';
import { CkeditorComponent } from '@app/elements/ckeditor/ckeditor.component';

@Component({
    selector: 'runtime-html-compiler',
    template: `
        <div #container></div>
    `,
})
export class RuntimeHtmlCompiler implements OnInit, OnDestroy {

    @Output() selectNode: EventEmitter<string> = new EventEmitter();
    @Output() onChange: EventEmitter<{}> = new EventEmitter();
    
    @Input() xe_uuid: string;
    @Input() html: string;

    @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef

    protected selector: string = 'runtime-html';
    // protected runtimeCompClass: any = RuntimeComponent;
    protected compRef: ComponentRef<{}>;
    protected module: ModuleWithComponentFactories<any>;

    constructor(private compiler: Compiler) { }

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
    
    public compile(): ComponentFactory<any>{
        if (isNil(this.html)) {
            this.html = 'undefined';
        }

        this.html = `<xedit xe_uuid="${this.xe_uuid}">\n${this.html}\n</xedit>`;

        const metadata = {
            selector: this.selector,
            template: this.html,
            outputs: [
                'selectNode',
                'onChange'
            ],
            inputs: [
                'xeUuid'
            ]
        };

        this.destroy();

        return this.load(metadata);
    }

    public viewRef(compFactory: ComponentFactory<any>) : RuntimeHtmlCompiler {
        this.compRef = this.container.createComponent(compFactory);
        
        this.compRef.instance['selectNode'].subscribe($event => this.changeSelection($event));
        this.compRef.instance['onChange'].subscribe($event => this.changeContent($event));
        
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
        const decoratorComp = Component(metadata)(class RuntimeComponent {
            public xeUuid: string;

            public selectNode: EventEmitter<string> = new EventEmitter();
            public onChange: EventEmitter<{}> = new EventEmitter();

            changeSelection(uuid: string) {
                this.selectNode.emit(uuid);
            }

            changeContent(data: {}) {
                this.onChange.emit(data);
            }
        });

        @NgModule({
            imports: [
                RuntimeModule,
                CommonModule
            ],
            declarations: [
                decoratorComp
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        })
        class RuntimeComponentModule { }

        try {
            this.module = this.compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
            return this.module.componentFactories.find(f => f.componentType === decoratorComp);
        } catch (ex) {
            const message = 'Failed to compile the template please use the "text view"';
            console.error(message, ex);
            this.html = `<div style="padding:50px; color:red;">${message}</div>`;
            return this.compile();   
            // throw new Error('Failed to compile the template please use the "text view"');        
        }
    }
}