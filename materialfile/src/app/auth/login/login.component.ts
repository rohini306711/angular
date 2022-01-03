import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private router:Router,private auth:AuthService) { }
  signInForm!:FormGroup;
  ngOnInit(): void {
    this.signInForm=this.formBuilder.group({
      name:["",Validators.required],
      
      password:[""]
      
          })
  }
  signIn(){
    // this.router.navigateByUrl("result");
}
next(){
  this.router.navigateByUrl("register");
}
}


