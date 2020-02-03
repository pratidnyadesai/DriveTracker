import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css'],
  providers: [DataserviceService]
})
export class Login2Component {
  email = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);

  password = new FormControl('', [Validators.required, Validators.minLength(5)]);

  loginfrom2: FormGroup = this.builder.group({
    email: this.email,
    password: this.password
  });

  constructor(private builder: FormBuilder, private ser: DataserviceService,private route:Router) { }
  res: any;
  ngOnInit() {
  }
  

  log() {
    this.ser.login(this.loginfrom2.value).subscribe((e: any) => {
      this.res = e;
      if (this.res.status == "user") {
        alert("hii Successfully Login");
        this.route.navigate(['/welcm']);
      }
      else{
alert("Sorry your invalid User");
      }
    });

  }
}


