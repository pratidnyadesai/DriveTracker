import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component {
  email=new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);

  password=new FormControl('',[Validators.required,Validators.minLength(5)]);
  
  loginfrom2:FormGroup=this.builder.group({
    email:this.email,
    password:this.password
  });

  constructor(private builder:FormBuilder) {}

  ngOnInit() {
  }
  /* form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  }); */

  submit() {
    alert("success Login");
  }
}


