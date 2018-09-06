import { DynFormModule } from './dyn-form.module';

describe('DynFormModule', () => {
  let dynFormModule: DynFormModule;

  beforeEach(() => {
    dynFormModule = new DynFormModule();
  });

  it('should create an instance', () => {
    expect(dynFormModule).toBeTruthy();
  });
});
