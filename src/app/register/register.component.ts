import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
  import { from } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  goLoginPage():void{
    this.router.navigate(['']);
  }
}
