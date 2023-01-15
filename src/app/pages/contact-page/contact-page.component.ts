import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {}

  contactForm = this.formBuilder.group({
    firstname: "",
    lastname: "",
    country: "usa",
    subject: ""
  });

  // data = {
  //   firstname: "",
  //   lastname: "",
  //   country: "usa",
  //   subject: ""
  // };

  // input(e : any) : void {
  //   const { name, value } = e.target;
  //   if(name == "firstname") {
  //     this.data.firstname = value;
  //   } else if(name == "lastname") {
  //     this.data.lastname = value;
  //   } else if(name == "country") {
  //     this.data.country = value
  //   } else {
  //     this.data.subject = value;
  //   }
  // }

  onSubmit() : void {
    console.log(this.contactForm.value);
  }

}
