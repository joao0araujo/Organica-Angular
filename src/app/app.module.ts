import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PesquisaComponentComponent } from './components/pesquisa-component/pesquisa-component.component';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { ExemplosComponentComponent } from './components/exemplos-component/exemplos-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PesquisaComponentComponent,
    MenuComponentComponent,
    ExemplosComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
