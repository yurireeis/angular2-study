import { DataBindingModule } from './data-binding.module';

describe('DataBindingModule', () => {
  let dataBindingModule: DataBindingModule;

  beforeEach(() => {
    dataBindingModule = new DataBindingModule();
  });

  it('should create an instance', () => {
    expect(dataBindingModule).toBeTruthy();
  });
});
