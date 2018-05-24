import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CursosModule } from './cursos/cursos.module';
import { MeuFormModule } from './meu-form/meu-form.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { AppComponent } from './app.component';
import { CicloComponent } from './ciclo/ciclo.component';

@NgModule({
  declarations: [
    AppComponent,
    CicloComponent
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
