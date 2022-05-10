import { Injectable } from '@angular/core';

const KEY = 'token'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  getToken() {
    return localStorage.getItem(KEY) ?? ''
  }

  saveToken(token: string) {
    localStorage.setItem(KEY, token)
  }

  deleteToken() {
    localStorage.removeItem(KEY)
  }

  hasToken() {
    return !! this.getToken() // The !! operator returns a boolean. True if the function has a not null return, and false otherwise.
  }
}
