import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab3';
  public login = [];

  constructor(private _loginService : LoginService){}

  ngOnInit(){
    this._loginService.getDetails()
    .subscribe(data => this.login = data);
  }
}
