import {  Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit  {


  @ViewChild('contactForm') contactForm: NgForm;
  contact:contact;

  ngOnInit()  {


    this.contact = {
      firstname:"",
      lastname:"",
      email:"",
      url:"",
      zip:"",
    };

  }
  // calendarOptions: CalendarOptions = {
  //   initialView: 'dayGridMonth'
  // };

  onSubmit(_contactForm) {
    console.log(this.contactForm.value);
  }

  cityList:city[] = [
    new city("1", "KOLKATA"),
    new city('2', 'HOWRAH'),

  ];
}

export class city {
  id:string;
  name:string;

  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}
    export class contact {
    firstname:string;
    lastname:string;
    email:string;
    url:string;
    zip:string;
}
