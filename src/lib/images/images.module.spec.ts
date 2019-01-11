import { ImagesModule } from './images.module';

describe('ImagesModule', () => {
  let imagesModule: ImagesModule;

  beforeEach(() => {
    imagesModule = new ImagesModule();
  });

  it('should create an instance', () => {
    expect(imagesModule).toBeTruthy();
  });
});
