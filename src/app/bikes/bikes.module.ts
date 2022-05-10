import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BikesRoutingModule } from './bikes-routing.module';
import { BikesListComponent } from './bikes-list/bikes-list.component';


@NgModule({
  declarations: [
    BikesListComponent
  ],
  imports: [
    CommonModule,
    BikesRoutingModule
  ]
})
export class BikesModule { }
