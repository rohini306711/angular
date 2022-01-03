import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup;
  uservalue: any = [];
  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthService) { }
  // data = [{ id: 1, value: "a" }]
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ["", Validators.required],
      lastname: [""],
      email: [""],
      password: [""]

    })

  }


  signUp() {
    this.router.navigateByUrl("result");
    this.uservalue = this.signupForm.value;
    this.auth.userdata.push(this.uservalue);

  }
  get name() {
    return this.signupForm.get('name')
  }

  get lastname() {
    return this.signupForm.get('lastname')
  }
  get email() {
    return this.signupForm.get('email')
  }
  get password() {
    return this.signupForm.get('password')
  }
}

