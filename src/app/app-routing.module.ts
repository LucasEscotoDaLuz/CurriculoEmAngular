import { ContatoComponent } from './componente/contato/contato.component';
import { ProjetosComponent } from './componente/projetos/projetos.component';
import { CurriculoComponent } from './componente/curriculo/curriculo.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'curriculo', component: CurriculoComponent},
  {path: 'projetos', component: ProjetosComponent},
  {path: 'contato', component: ContatoComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
