import { DamModule } from './dam.module';

describe('DamModule', () => {
  let damModule: DamModule;

  beforeEach(() => {
    damModule = new DamModule();
  });

  it('should create an instance', () => {
    expect(damModule).toBeTruthy();
  });
});
