import { Injectable } from '@angular/core';
import { isNil } from 'ramda';
import { AutoloadModulesService } from '@app/services/autoload-modules-service/autoload-modules.service';
import { Node } from '@app/models/node';
import { XeditMapper } from '@app/models/schema/xedit-mapper';
import { environment } from 'environments/environment';

@Injectable({
    providedIn: 'root'
})
export class NodeFactoryService {
    constructor(private modulesService: AutoloadModulesService) {}

    create(uuid, traget, attributes) {
        const node = new Node(uuid, traget, attributes);

        const module = node.getSchema()['type'];
        if (!isNil(module)) {
            node.setModule(this.modulesService.getModule(module));
        }

        return node;
    }

    /**
     * Parse DomNode to EditorNode
     *
     * @param element DomNode
     */
    createFromElement(element) {
        const attributes = {};
        let node = null;

        const uuid = element.getAttribute(XeditMapper.TAG_UUID);

        Object.keys(element.attributes).forEach(key => {
            attributes[element.attributes[key].name] = element.attributes[key].value;
        });

        try {
            node = this.create(uuid, element, attributes);
        } catch (e) {
            if (environment.debug) {
                console.error('This element is not a valid node');
            }
        }
        return node;
    }
}
