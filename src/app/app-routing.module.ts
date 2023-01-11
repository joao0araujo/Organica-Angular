import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaLoginComponent } from './components/pagina-login/pagina-login.component';
import { PaginaMaterialdidaticoComponent } from './components/pagina-materialdidatico/pagina-materialdidatico.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { PaginaQuemsomosComponent } from './components/pagina-quemsomos/pagina-quemsomos.component';
import { PaginaQuestoesComponent } from './components/pagina-questoes/pagina-questoes.component';
import { QuestaoEspecificaComponent } from './components/questao-especifica/questao-especifica.component';

const routes: Routes = [
  {path: '', component: PaginaPrincipalComponent},
  {path: 'questoes', component: PaginaQuestoesComponent},
  {path: 'login', component: PaginaLoginComponent},
  {path: 'somos', component:PaginaQuemsomosComponent},
  {path: 'materi', component:PaginaMaterialdidaticoComponent},
  {path: 'especifica', component:QuestaoEspecificaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
