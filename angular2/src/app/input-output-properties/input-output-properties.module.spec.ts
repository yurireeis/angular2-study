import { InputOutputPropertiesModule } from './input-output-properties.module';

describe('InputOutputPropertiesModule', () => {
  let inputOutputPropertiesModule: InputOutputPropertiesModule;

  beforeEach(() => {
    inputOutputPropertiesModule = new InputOutputPropertiesModule();
  });

  it('should create an instance', () => {
    expect(inputOutputPropertiesModule).toBeTruthy();
  });
});
