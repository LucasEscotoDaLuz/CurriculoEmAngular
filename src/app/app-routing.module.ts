import { ConhecimentosComponent } from './conhecimentos/conhecimentos.component';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { RodapeComponent } from './componente/rodape/rodape.component';


import { InicioComponent } from './componente/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'rodape', component: RodapeComponent},
  {path: 'carrossel', component: CarrosselComponent},
  {path: 'conhecimentos', component: ConhecimentosComponent},




];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
