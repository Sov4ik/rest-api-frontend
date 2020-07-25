import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenStorageService} from "./token-storage.service";

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly httpOptions: any;

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenStorageService.getToken()
      })
    };
  }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all',  this.httpOptions);
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', this.httpOptions);
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod',  this.httpOptions);
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin',  this.httpOptions);
  }
}
