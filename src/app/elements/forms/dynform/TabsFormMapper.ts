import { hasIn, isNil, is } from 'ramda';
import { DropdownQuestion } from './questions/question-dropdown';
import { TextboxQuestion } from './questions/question-textbox';
import { DepDropQuestion } from './questions/question-depdrop';
import { QuestionBase } from './questions/question-base';
import { TextAreaQuestion } from './questions/question-textarea';

/**
 * This class extracts and maps data about the additional form
 * for uploading or editing resources.
 */
export default class TabsFormMapper {

    /**
     * The extracted forms as a dict
     */
    forms = null;
    /**
     * The extracted Questions instances for every field of the form
     */
    private fields: QuestionBase<Object>[] = null;
    /**
     * @ignore
     */
    private tabs: any[] = null;
    private title: string;

    /**@ignore */
    constructor(formSchema) {
        this.init(formSchema);
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

    getTabs() {
        return this.tabs;
    }

    setTabs(tabs: any[]) {
        this.tabs = tabs;
    }

    setTitle(title) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

    /**
     * Initializes and process the form to obtain que question fields
     */
    private initForm() {
        const localForm = this.getForms();
        this.title = localForm.title;
        this.tabs = this.handleTabs(localForm.tabs);
      }

    /**@ignore */
    private getValue(field: Object, key: string, _default: any = ''): any {
        let value = Object.assign({}, field);
        const keys = key.split('.');
        if (Array.isArray(keys)) {
            for (let i = 0; i < keys.length; i++) {
                if (is(Object, value) && hasIn(keys[i], value)) {
                    value = value[keys[i]];
                } else {
                    break;
                }
            }
        }

        if (typeof value === 'object') {
            value = _default;
        }
        return value;
    }

    /**
     * Process the tabs from the schema.
     * @param rawTabs The raw schema
     */
    handleTabs(rawTabs, asset = null) {
        let tabs;
        let fields: QuestionBase<Object>[] = null;
        tabs = rawTabs.map( (tab) => {
            fields = this.handleForm(tab.fields, asset);
            return {title: tab.title, questions: fields};
        });
        return tabs;
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
                field.object.val = this.getValue(asset, key);
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
    private init(formSchema) {
        this.setForms(formSchema)
            .initForm();
    }
}
