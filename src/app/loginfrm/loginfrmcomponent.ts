import { Component, OnInit } from '@angular/core';

import { FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-loginfrm',
  templateUrl: './loginfrm.component.html',
  styleUrls: ['./loginfrm.component.css']
})
export class LoginfrmComponent implements OnInit{

  email=new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);

  password=new FormControl('',[Validators.required,Validators.minLength(5)]);
  
  loginfrom:FormGroup=this.builder.group({
    email:this.email,
    password:this.password
  });

  constructor(private builder:FormBuilder) {}

  ngOnInit() {
  }
  submit(){
    alert("success Login");
  }


}
