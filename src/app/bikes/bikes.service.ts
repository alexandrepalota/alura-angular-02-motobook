import { TokenService } from './../authentication/token.service';
import { Bikes } from './bikes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class BikesService {

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  listFromUser(userName: string): Observable<Bikes> {
    const token = this.tokenService.getToken()
    const headers = new HttpHeaders().append('x-access-token', token)
    return this.httpClient.get<Bikes>(`${API}/${userName}/photos`, {
      headers
    });
  }
}
