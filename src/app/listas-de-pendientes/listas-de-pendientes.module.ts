import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListasDePendientesPage } from './listas-de-pendientes.page';

const routes: Routes = [
  {
    path: '',
    component: ListasDePendientesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListasDePendientesPage]
})
export class ListasDePendientesPageModule {}
