import { Bikes } from './../bikes';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/authentication/user/user.service';
import { BikesService } from '../bikes.service';

@Component({
  selector: 'app-bikes-list',
  templateUrl: './bikes-list.component.html',
  styleUrls: ['./bikes-list.component.css']
})
export class BikesListComponent implements OnInit {

  bikes!: Bikes

  constructor(private userService: UserService, private bikeService: BikesService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: user => {
        const userName = user.name ?? '';
        this.bikeService.listFromUser(userName).subscribe({
          next: bikes => this.bikes = bikes
        })
      }
    })
  }

}
