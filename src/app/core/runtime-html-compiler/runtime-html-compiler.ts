import { isNil } from 'ramda';
import { RuntimeModule } from './runtime-module';

import { ComponentFactory, ComponentRef, ViewChild, ViewContainerRef, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ComponentFactoryResolver, Compiler, Component, NgModule, ModuleWithComponentFactories } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionComponent } from '@app/elements/forms/dynform/section/section.component';
import { CkeditorComponent } from '@app/elements/ckeditor/ckeditor.component';

@Component({
    selector: 'runtime-html-loader',
    template: '<div #container></div>',
})
export class RuntimeHtmlCompiler implements OnInit, OnDestroy {

    @Output() selectNode: EventEmitter<string> = new EventEmitter();
    
    @Input() nodeId: string;
    @Input() html: string;

    @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef

    protected selector: string = 'xedit';
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
    
    public compile(): ComponentFactory<any>{
        if (isNil(this.html)) {
            this.html = '<div>undefined</div>';
        }

        const metadata = {
            selector: this.selector,
            template: this.html,
            outputs: [
                'selectNode',
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
        this.setComponentProps({
            'xeUuid': this.nodeId
        })
        
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

            changeSelection(uuid: string) {
                this.selectNode.emit(uuid);
            }
        });

        @NgModule({
            imports: [
                RuntimeModule,
                CommonModule
            ],
            declarations: [
                decoratorComp
            ]
        })
        class RuntimeComponentModule { }

        this.module = this.compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
        return this.module.componentFactories.find(f => f.componentType === decoratorComp);
    }
}