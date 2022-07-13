import { Component, Input, OnInit } from '@angular/core';
import { Bikes } from '../bikes';

@Component({
  selector: 'app-grid-photos-bikes',
  templateUrl: './grid-photos-bikes.component.html',
  styleUrls: ['./grid-photos-bikes.component.css']
})
export class GridPhotosBikesComponent implements OnInit {

  @Input()
  bikes!: Bikes;

  constructor() { }

  ngOnInit(): void {
  }

}
