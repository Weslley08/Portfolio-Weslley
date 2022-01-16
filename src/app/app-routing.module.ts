import { HomeComponent } from './home/home.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { SobreComponent } from './sobre/sobre.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: 'projetos',
    component: ProjetosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
