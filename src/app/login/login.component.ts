import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormControl} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router,private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('',{validators:[Validators.required]}),
      password: new FormControl('',{validators:[Validators.required]})
    });
  }
  onSubmit(){
    console.log(this.loginForm);
  }
  onRegisterPage():void{
    this.router.navigate(['/register']);
  }

}
