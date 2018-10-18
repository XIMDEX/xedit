import { hasIn, isNil, is } from 'ramda';
import {environment} from './environment';
import { DropdownQuestion } from '../components/dyn-form/questions/question-dropdown';
import { TextboxQuestion } from '../components/dyn-form/questions/question-textbox';
import { DepDropQuestion } from '../components/dyn-form/questions/question-depdrop';
import { QuestionBase } from '../components/dyn-form/questions/question-base';
import { TextAreaQuestion } from '../components/dyn-form/questions/question-textarea';
import { MainService } from '../services/main.service';
import { Asset } from '../models/Asset';

/**
 * This class extracts and maps data about the additional form
 * for uploading or editing resources.
 */
export default class FormMapper {

    /**
     * The extracted forms as a dict
     */
    forms = null;
    /**
     * The extracted Questions instances for every field of the form
     */
    private fields: QuestionBase<Object>[] = null;
    /**
     * The instance of the mainService
     */
    private mainService: MainService;

    /**@ignore */
    constructor(mainService: MainService) {
        this.mainService = mainService;
        this.init();
    }

    /**@ignore */
    setForms(forms) {
        this.forms = forms;
        return this;
    }

    /**@ignore */
    getForms() {
        return this.forms;
    }

    /**@ignore */
    getFields() {
        return this.fields;
    }

    /**@ignore */
    setFields(fields) {
        this.fields = fields;
    }

    /**
     * Initializes and process the form to obtain que question fields
     */
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

    /**@ignore */
    private getValue(field: Object, key: string, isArray: boolean = true): any {
        let value = Object.assign({}, field);
        const keys = key.split('.');

        if (!isArray) {
            if (hasIn(key, value)) {
                value = value[key];
            }
        } else {
            for (let i = 0; i < keys.length; i++) {
                if (is(Object, value) && hasIn(keys[i], value)) {
                    value = value[keys[i]];
                } else {
                    break;
                }
            }
        }

        if (value === field) {
            value = '';
        }
        return value;
    }

    /**
     * Evaluates every field in the form and creates the questions
     * @param raw The raw data from the form
     * @param asset Some asset to use its data
     */
    handleForm(raw, asset = null) {
        const newFields = raw.map(field => {
            let object = null;
            if ( !isNil( asset ) ) {
                const key = hasIn('realName', field.object) ? field.object.realName : field.object.key;
                                field.object.val = this.getValue(asset, key, this.getProp(field.object, 'multi', false));
            }
            if (field.type === 'dropdown') {
                object = new DropdownQuestion(field.object);
            } else if (field.type === 'text') {
                object = new TextboxQuestion(field.object);
            } else if (field.type === 'depdrop') {
                object = new DepDropQuestion(field.object);
            } else if (field.type === 'text-area') {
                object = new TextAreaQuestion(field.object);
            }
            return object;
        });
        return newFields.sort( (a, b) => a.order - b.order );
    }

    /**
     * Gets a property from the selected object
     * @param obj The object to be inspected (The haystack)
     * @param prop The property to be found (The needle)
     * @param _default The default value if the needle is not found
     */
    private getProp(obj, prop: string, _default: any = null) {
        let result = _default;

        if (hasIn(prop, obj)) {
            result = obj[prop];
        }

        return result;
    }

    /**
     * Initializes the mapper extracting values from the environment and the active window,
     * prioritising the window object.
     */
    private init() {
        const xdam = hasIn('$xdam', window) ? (<any>window).$xdam : null;

        const result = Object.assign({}, environment, xdam);
        this.setForms(result.forms)
            .initForm();
    }
}
