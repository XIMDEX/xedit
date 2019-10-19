import { TestBed } from '@angular/core/testing';

import { AutoloadModulesService } from './autoload-modules.service';

describe('AutoloadModulesService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: AutoloadModulesService = TestBed.get(AutoloadModulesService);
        expect(service).toBeTruthy();
    });
});
