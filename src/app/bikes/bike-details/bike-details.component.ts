import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Bike } from '../bikes';
import { BikesService } from '../bikes.service';
import { ActivatedRoute } from '@angular/router';
import { throws } from 'assert';

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.css']
})
export class BikeDetailsComponent implements OnInit {

  bikeId!: number
  bike$!: Observable<Bike>

  constructor(private bikeService: BikesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.bikeId = (Number) (this.activatedRoute.snapshot.paramMap.get('bikeId'))
    this.bikeService.findById(this.bikeId)
  }

}
