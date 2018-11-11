import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'listasDeTareas', loadChildren: './listas-de-tareas/listas-de-tareas.module#ListasDeTareasPageModule' },
  { path: 'listasDePendientes', loadChildren: './listas-de-pendientes/listas-de-pendientes.module#ListasDePendientesPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
