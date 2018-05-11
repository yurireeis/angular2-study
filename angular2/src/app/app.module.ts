import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CursosModule } from './cursos/cursos.module';
import { MeuFormModule } from './meu-form/meu-form.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CursosModule,
    MeuFormModule,
    DataBindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
