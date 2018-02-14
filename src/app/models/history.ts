import { isNil, remove as r_remove } from 'ramda';
import { UUID } from 'angular2-uuid';
import * as localForage from 'localforage';

export class History {

    // Variables
    private maxStates: number;
    private maxSnapshots: number;
    private pos: number;
    private state: any;
    private states: Array<string>;
    private snapshots: Array<Object>;
    private db;
    private sc;

    // Contructor
    constructor(initState: any, maxStates: number = 50, maxSnapshots = 5) {
        this.pos = 0;
        this.states = new Array;
        this.setMaxStates(maxStates);
        this.setMaxSnapshots(maxSnapshots);
        this.state = initState;
        this.states = [];
        this.snapshots = [];

        // Init database
        this.prepareDatabase();

        // Save init state
        this.save(initState);
        this.snapshot();

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

    getSnapshots(): Array<Object> {
        return this.snapshots;
    }

    getSnapshot(key) {
        return this.snapshots[key];
    }

    getMaxSnapshots() {
        return this.maxSnapshots;
    }

    setMaxSnapshots(maxSnapshots: number) {
        if (maxSnapshots <= 0 && !Number.isInteger(maxSnapshots)) {
            throw new TypeError('Invalid maxSnapshots');
        }
        this.maxSnapshots = maxSnapshots;
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
            this.remove(r_remove(0, this.pos + 1, this.states), this.db);
            this.states.splice(this.pos + 1, this.countStates());
        }

        if (this.checkMaxStates()) {
            this.remove(this.states.shift(), this.db);
            this.pos--;
        }

        this.save(state);

        this.state = state;
    }

    /**
     * Save state in web storage
     */
    private save(state: any) {

        if (this.db) {
            const stateId = UUID.UUID();
            try {
                this.db.setItem(stateId, state, function (err, value) {
                    if (err) {
                        console.error(err);
                    }
                });
                this.states.push(stateId);
            } catch (ex) {
                console.error('History save error');
            }
        } else {
            console.error('Storage not available');
        }
    }


    /**
     * Snapshot last state in web storage
     */
    public snapshot() {

        if (this.sc) {
            const stateId = this.states[this.pos];
            try {
                if (this.snapshots.length > this.getMaxSnapshots()) {
                    this.remove(stateId, this.sc);
                    this.snapshots.shift();
                }
                this.sc.setItem(stateId, this.state, function (err, value) {
                    if (err) { console.error(err); }
                });
                this.snapshots.push({ 'key': stateId, 'message': this.state.message });
            } catch (ex) {
                console.error('Snapshot save error');
            }
        } else {
            console.error('Storage not available');
        }
    }


    /**
     * Recovery state by key from web storage
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
    private remove(keys, database) {
        keys = (keys instanceof Array) ? keys : [keys];
        keys.forEach(key => {
            if (database) {
                database.removeItem(key, (err) => {
                    if (err) {
                        console.error(err);
                    }
                });
            }
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
    newState(state: any): any {
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
        this.db = localForage.createInstance({
            driver: localForage.INDEXEDDB,
            name: 'xedit',
            version: 1.0,
            size: 4980736,
            storeName: 'history',
            description: 'Document history'
        });

        this.sc = localForage.createInstance({
            driver: localForage.INDEXEDDB,
            name: 'xedit',
            version: 1.0,
            size: 4980736,
            storeName: 'snapshot',
            description: 'Document snapshots'
        });

        this.db.clear();
        this.sc.clear();
    }
}
