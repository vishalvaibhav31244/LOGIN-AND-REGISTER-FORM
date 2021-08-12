import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import {LoginDetails} from './login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _url : string = "/assets/data/login.json";
  constructor(private http: HttpClient) { }

  getDetails(): Observable<LoginDetails[]>{
    return this.http.get<LoginDetails[]>(this._url);
  }
}
