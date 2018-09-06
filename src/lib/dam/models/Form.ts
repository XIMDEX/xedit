import {JsonMember, JsonObject} from 'typedjson-npm';

@JsonObject
export class Form {
    @JsonMember({ name: 'name' })
    name: string;

    @JsonMember({ name: 'id' })
    id: number;

    @JsonMember({ name: 'endpoint' })
    endPoint: string;

    @JsonMember({ name: 'fields' })
    fields: any[];

    @JsonMember({ name: 'buttons' })
    buttons: any[];

    constructor() {
        this.name = '';
        this.id = -1;
        this.endPoint = '';
        this.fields = [];
        this.buttons = [];
    }
}
