import { User } from './user';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>({})

  constructor(private tokenService: TokenService) {
    if (this.tokenService.hasToken()) {
      this.jwtDecode()
    }
  }

  jwtDecode() {
    const token = this.tokenService.getToken()
    const user = jwt_decode(token) as User
    this.userSubject.next(user)
  }

  getUser() {
    return this.userSubject.asObservable()
  }

  saveToken(token: string) {
    this.tokenService.saveToken(token)
    this.jwtDecode()
  }

  logout() {
    this.tokenService.deleteToken()
    this.userSubject.next({})
  }

  isLogged() {
    return this.tokenService.hasToken()
  }

}
