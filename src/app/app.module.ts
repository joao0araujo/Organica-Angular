import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PesquisaComponentComponent } from './components/pesquisa-component/pesquisa-component.component';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { ExemplosComponentComponent } from './components/exemplos-component/exemplos-component.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { PaginaQuestoesComponent } from './components/pagina-questoes/pagina-questoes.component';
import { PaginaLoginComponent } from './components/pagina-login/pagina-login.component';
import { PaginaQuemsomosComponent } from './components/pagina-quemsomos/pagina-quemsomos.component';
import { PaginaMaterialdidaticoComponent } from './components/pagina-materialdidatico/pagina-materialdidatico.component';
import { QuestaoEspecificaComponent } from './components/questao-especifica/questao-especifica.component';


@NgModule({
  declarations: [
    AppComponent,
    PesquisaComponentComponent,
    MenuComponentComponent,
    ExemplosComponentComponent,
    PaginaPrincipalComponent,
    PaginaQuestoesComponent,
    PaginaLoginComponent,
    PaginaQuemsomosComponent,
    PaginaMaterialdidaticoComponent,
    QuestaoEspecificaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
