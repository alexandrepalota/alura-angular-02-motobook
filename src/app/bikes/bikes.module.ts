import { CardModule } from './../components/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BikesRoutingModule } from './bikes-routing.module';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { BikeComponent } from './bike/bike.component';
import { GridPhotosBikesComponent } from './grid-photos-bikes/grid-photos-bikes.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';


@NgModule({
  declarations: [
    BikesListComponent,
    BikeComponent,
    GridPhotosBikesComponent,
    BikeDetailsComponent
  ],
  imports: [
    CommonModule,
    BikesRoutingModule,
    CardModule
  ]
})
export class BikesModule { }
