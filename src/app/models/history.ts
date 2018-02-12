import { isNil, remove as r_remove } from 'ramda';
import { UUID } from 'angular2-uuid';
import * as localForage from 'localforage';

export class History {

    // Variables
    private maxStates: number;
    private pos: number;
    private state: any;
    private states: Array<string>;
    private db;

    // Contructor
    constructor(initState: any, maxStates: number = 50) {
        this.pos = 0;
        this.states = new Array;
        this.setMaxStates(maxStates);
        this.state = initState;
        this.states = [];

        // Init database
        this.db = this.prepareDatabase();

        // Save init state
        this.save(initState);

    }

    // ************************************** Getters and setters **************************************/
    getState() {
        return this.state;
    }

    setState(state: any) {
        this.state = state;
    }

    getMaxStates() {
        return this.maxStates;
    }

    setMaxStates(maxStates: number) {
        if (maxStates <= 0 && !Number.isInteger(maxStates)) {
            throw new TypeError('Invalid maxStates');
        }
        this.maxStates = maxStates;
    }

    /************************************** Private Methods **************************************/

    /**
     * Get the number of states
     */
    private countStates(): number {
        return this.states.length;
    }

    /**
     * Check if there are the maximun number of states (By default 100)
     */
    private checkMaxStates(): boolean {
        return this.countStates() >= this.maxStates;
    }

    /**
     * Added a new state
     */
    private addState(state: any): void {

        if (this.countStates() > this.pos) {
            this.remove(r_remove(0, this.pos + 1, this.states));
            this.states.splice(this.pos + 1, this.countStates());
        }

        if (this.checkMaxStates()) {
            this.remove(this.states.shift());
            this.pos--;
        }

        if (!isNil(this.state)) {
            this.save(this.state);
        }

        this.state = state;
    }

    /**
     * Save state in SessionStorage
     */
    private save(state: any) {
        if (typeof (Storage) !== 'undefined') {
            const stateId = UUID.UUID();
            try {

                if (this.db) {
                    this.db.setItem(stateId, state, function (err, value) {
                        if (err) {
                            console.error(err);
                        }
                    });
                }
                sessionStorage.setItem(stateId, JSON.stringify(state));
                this.states.push(stateId);
            } catch (ex) {
                console.error('This object can not support stringify');
            }
        } else {
            console.error('History is not supported.');
        }
    }

    /**
     * Recovery state by key from SessionStorage
     *
     * @param stateId
     */
    protected recovery(stateId: string) {
        return this.db.getItem(stateId, (err, value) => {
            if (err) {
                console.error(err);
            } else {
                return value;
            }
        });
    }

    /**
     * Remove state from storage
     */
    private remove(keys) {
        keys = (keys instanceof Array) ? keys : [keys];
        keys.forEach(key => {
            if (this.db) {
                this.db.removeItem(key, (err) => {
                    if (err) {
                        console.error(err);
                    }
                });
            }
            sessionStorage.removeItem(key);
        });
    }

    /************************************** Public Methods **************************************/


    /**
     * Return to the previous state if it exists, otherwise it does not do anything
     */
    lastState(): any {
        if (this.hasPreviousState()) {
            this.pos--;
        }

        return this.recovery(this.states[this.pos]);
    }

    /**
     * Go to the next state if it exists, otherwise it does not do anything
     */
    nextState(): any {
        if (this.hasNextState()) {
            this.pos++;
        }

        return this.recovery(this.states[this.pos]);
    }

    /**
     * Go to the initial state
     */
    resetState(): any {
        this.pos = 0;
        if (this.state.length > 0) {
            this.recovery(this.states[this.pos]);
        }
        return this;
    }

    /**
     * Added new state
     */
    newState(state: any): Object {
        this.addState(state);
        this.pos++;

        return this;
    }

    /**
     * Check if there is a next state
     */
    hasNextState(): boolean {
        return this.pos < this.countStates() - 1;
    }

    /**
     * Check if there is a previous state
     */
    hasPreviousState(): boolean {
        return this.pos > 0;
    }

    /**
     * Init database
     */
    prepareDatabase() {
        const db = localForage.createInstance({
            driver: localForage.INDEXEDDB,
            name: 'xedit',
            version: 1.0,
            size: 4980736,
            storeName: 'history',
            description: 'Document history'
        });

        db.clear();

        return db;
    }
}
