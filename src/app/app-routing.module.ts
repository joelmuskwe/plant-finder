import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  ListPlantsCoreComponent,
  FindPlantsCoreComponent,
  AddPlantCoreComponent
} from './containers';

const routes: Routes = [
  {
    path: '',
    component: ListPlantsCoreComponent
  },
  {
    path: 'find',
    component: FindPlantsCoreComponent
  },
  {
    path: 'add',
    component: AddPlantCoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
