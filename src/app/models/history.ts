import { isNil } from 'ramda'

export class History {

    //private state: any;
    private maxStates: number;
    private pos: number;
    private states: Array<any>;

    // Constructor
    constructor(initState: any = null, maxStates: number = 100) {
        this.pos = 0;
        this.states = new Array;
        this.setMaxStates(maxStates);
        if (!isNil(initState))
            this.addState(initState);
    }

    // Setters and getters
    public getState = function () {
        return this.states[this.pos] || null
    }

    public setState(states: Array<any>) {
        this.states = states;
    }

    public setMaxStates = function (maxStates: number) {
        if (maxStates <= 0 && !Number.isInteger(maxStates))
            throw new TypeError('Invalid maxStates');
        this.maxStates = maxStates;
    }

    public addState(state: any) {

        if (this.totalStates() > this.pos)
            this.states.splice(this.pos + 1, this.totalStates());

        if (this.checkMaxStates())
            this.states.shift();

        this.states.push(state);
    }

    // Methods
    private totalStates() {
        return this.states.length;
    }

    private checkMaxStates() {
        return this.totalStates() > this.maxStates;
    }


    protected lastState = function () {
        if (this.hasPreviousState())
            this.pos--;

        return this;
    }

    protected nextState = function () {
        if (this.hasNextState())
            this.pos++;

        return this;
    }

    protected resetState = function () {
        this.pos = 0;
    }

    protected newState = function (state: any) {
        this.addState(state);
        console.log(this.states)
        this.pos++;
    }

    public hasNextState = function () {
        return this.pos < this.totalStates() - 1;
    }

    public hasPreviousState = function () {
        return this.pos > 0;
    }
}
