import { hasIn, isNil, is } from 'ramda';
import { environment } from './environment';
import { DropdownQuestion } from '../components/dyn-form/questions/question-dropdown';
import { TextboxQuestion } from '../components/dyn-form/questions/question-textbox';
import { DepDropQuestion } from '../components/dyn-form/questions/question-depdrop';
import { QuestionBase } from '../components/dyn-form/questions/question-base';
import { MainService } from '../services/main.service';
import { Asset } from '../models/Asset';

export default class FormMapper {

    forms = null;
    private fields: QuestionBase<Object>[] = null;
    private mainService: MainService;

    constructor(mainService: MainService) {
        this.mainService = mainService;
        this.init();
    }

    setForms(forms) {
        this.forms = forms;
        return this;
    }

    getForms() {
        return this.forms;
    }

    getFields() {
        return this.fields;
    }

    setFields(fields) {
        this.fields = fields;
    }

    private initForm() {
        const localForm = this.getForms();
        if (localForm.api === true) {
            this.mainService.getForm().subscribe(response => {
                const rawFields = response['result'].data.fields;
                this.fields = this.handleForm(rawFields);
            });
        } else {
            this.fields = this.handleForm(localForm.fields);
        }
    }

    private getValue(field: Object, key: string): any {
        let value = Object.assign({}, field);
        const keys = key.split('.');
        for (let i = 0; i < keys.length; i++) {
            if (is(Object, value) && hasIn(keys[i], value)) {
                value = value[keys[i]];
            } else {
                break;
            }
        }

        if (value === field) {
            value = '';
        }
        return value;
    }

    /**
     * @param raw
     * @param asset
     */
    handleForm(raw, asset = null) {
        const newFields = raw.map(field => {
            let object = null;
            if (!isNil(asset)) {
                const key = hasIn('realName', field.object) ? field.object.realName : field.object.key;

                field.object.val = this.getValue(asset, key);
            }
            if (field.type === 'dropdown') {
                object = new DropdownQuestion(field.object);
            } else if (field.type === 'text') {
                object = new TextboxQuestion(field.object);
            } else if (field.type === 'depdrop') {
                object = new DepDropQuestion(field.object);
            }
            return object;
        });
        return newFields.sort((a, b) => a.order - b.order);
    }

    private init() {
        const xdam = hasIn('$xdam', window) ? (<any>window).$xdam : null;

        const result = Object.assign({}, environment, xdam);
        this.setForms(result.forms)
            .initForm();
    }
}
