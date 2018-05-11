import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';
import { InputOutputPropertiesModule } from '../input-output-properties/input-output-properties.module';
import { MeuFormModule } from '../meu-form/meu-form.module';

@NgModule({
  imports: [
    CommonModule,
    InputOutputPropertiesModule,
    MeuFormModule
  ],
  exports: [DataBindingComponent],
  declarations: [DataBindingComponent]
})
export class DataBindingModule { }
