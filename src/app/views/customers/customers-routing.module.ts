import { NgModule } from '@angular/core';
import { Routes,
  RouterModule } from '@angular/router';

import {ListComponent} from './list/list.component';
import {MapComponent} from './map/map.component';
import {CreateComponent} from './create/create.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Clients'
    },
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ListComponent,
        data: {
          title: 'Liste'
        }
      },
      {
        path: 'map',
        component: MapComponent,
        data: {
          title: 'Carte'
        }
      },{
        path: 'create',
        component: CreateComponent,
        data: {
          title: 'Création'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {}
