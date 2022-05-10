import { Router } from '@angular/router';
import { UserService } from './../../authentication/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // the $ is a convention to tell thah user is an observable
  user$ = this.userService.getUser()

  constructor(private userService: UserService, private router: Router) { }

  logout() {
    this.userService.logout()
    this.router.navigate([''])
  }

  ngOnInit(): void {
  }

}
