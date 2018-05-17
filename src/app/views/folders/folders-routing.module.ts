import { NgModule } from '@angular/core';
import { Routes,
  RouterModule } from '@angular/router';

import { FoldersComponent } from './folders.component';

const routes: Routes = [
  {
    path: '',
    component: FoldersComponent,
    data: {
      title: 'Mes documents'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoldersRoutingModule {}
