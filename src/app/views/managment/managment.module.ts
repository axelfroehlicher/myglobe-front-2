import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagmentComponent } from './managment.component';
import {ManagmentRoutingModule} from './managment-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ManagmentRoutingModule
  ],
  declarations: [ManagmentComponent]
})
export class ManagmentModule { }
