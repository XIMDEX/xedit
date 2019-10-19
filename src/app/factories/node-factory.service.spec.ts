import { TestBed } from '@angular/core/testing';

import { NodeFactoryService } from './node-factory.service';

describe('NodeFactoryService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: NodeFactoryService = TestBed.get(NodeFactoryService);
        expect(service).toBeTruthy();
    });
});
