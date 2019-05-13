import { hasIn } from "ramda";
/**
 * Represents a simple question with the needed values to work in a form
 */
export class QuestionBase<T> {
    /** The parameter for question type */
    value: T;
    /** The field key property */
    key: string;
    /** The field label property */
    label: string;
    /** If the question is required in the form */
    required: boolean;
    /** If the question is readonly in the form */
    readonly: boolean;
    /** The order of appeareance */
    order: number;
    /** The value for switching views */
    controlType: string;
    /**@ignore */
    val: any;
    /**The value mapping for selectors */
    map: { key: string; value: string };

    /**@ignore */
    constructor(
        options: {
            value?: T;
            key?: string;
            label?: string;
            required?: boolean;
            readonly?: boolean;
            order?: number;
            controlType?: string;
            val?: any;
            map?: { key: string; value: string };
        } = {}
    ) {
        this.value = options.value;
        this.key = options.key || "";
        this.label = options.label || "";
        this.required = !!options.required;
        this.readonly = !!options.readonly;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || "";
        const val = options.val || null;
        this.set(options, "map", {}).setVal(val);
    }

    /**
     * Securely sets the value from the selected object
     * @param object The object to be used
     * @param field The field to set the value
     * @param _default The default value if any
     */
    set(object, field: string, _default: any = null): QuestionBase<T> {
        let value = _default;
        if (hasIn(field, object)) {
            value = object[field];
        }
        this[field] = value;
        return this;
    }

    /**
     * Sets the val property and returns this
     * @param val The new val value
     */
    setVal(val: any = null) {
        this.val = val;
        return this;
    }
}
