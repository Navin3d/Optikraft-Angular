import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {

  constructor(private formBuilder:FormBuilder) {}

  signUpForm = this.formBuilder.group({
    email: "",
    password: "",
    confirmPassword: "",
    remember: false
  });
  
  handleSubmit() : void {
    console.log(this.signUpForm.value);
  }

}
