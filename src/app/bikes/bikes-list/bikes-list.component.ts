import { switchMap } from 'rxjs/operators';
import { User } from './../../authentication/user/user';
import { Bikes } from './../bikes';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/authentication/user/user.service';
import { BikesService } from '../bikes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bikes-list',
  templateUrl: './bikes-list.component.html',
  styleUrls: ['./bikes-list.component.css']
})
export class BikesListComponent implements OnInit {

  bikes$!: Observable<Bikes>

  constructor(private userService: UserService, private bikeService: BikesService) { }

  ngOnInit(): void {
    this.bikes$ = this.userService.getUser().pipe(
      switchMap(user => {
        const userName = user.name ?? ''
        return this.bikeService.listFromUser(userName)
      })
    )
  }

}
