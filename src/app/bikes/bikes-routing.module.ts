import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BikesListComponent
  },
  {
    path: ':bikeId',
    component: BikeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikesRoutingModule { }
