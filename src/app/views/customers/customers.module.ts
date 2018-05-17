import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomersRoutingModule} from './customers-routing.module';
import { MapComponent } from './map/map.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [MapComponent, ListComponent, CreateComponent]
})
export class CustomersModule { }
