import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BikesRoutingModule } from './bikes-routing.module';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { BikeComponent } from './bike/bike.component';


@NgModule({
  declarations: [
    BikesListComponent,
    BikeComponent
  ],
  imports: [
    CommonModule,
    BikesRoutingModule
  ]
})
export class BikesModule { }
