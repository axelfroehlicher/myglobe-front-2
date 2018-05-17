import { NgModule } from '@angular/core';
import { Routes,
  RouterModule } from '@angular/router';

import { ManagmentComponent } from './managment.component';

const routes: Routes = [
  {
    path: '',
    component: ManagmentComponent,
    data: {
      title: 'Gestion commerciale'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagmentRoutingModule {}
