import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListasDeTareasPage } from './listas-de-tareas.page';

const routes: Routes = [
  {
    path: '',
    component: ListasDeTareasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListasDeTareasPage]
})
export class ListasDeTareasPageModule {}
