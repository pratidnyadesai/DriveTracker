import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'; 
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[DataserviceService]
})
export class RegisterComponent  {

  userform:FormGroup;
   countries = ['India','USA', 'Germany', 'Italy', 'France'];

   constructor(private temp:DataserviceService) { }
  ngOnInit() 
  {
    this.userform=new FormGroup(
    {
      name:new FormControl('',[Validators.required,Validators.minLength(3)]),
      pass:new FormControl('',[Validators.required,Validators.minLength(5)]),
      mail:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9]+@[a-z]+[.][a-z]+")]),
      gender:new FormControl(),
      country: new FormControl(),
      mobile: new FormControl('',[Validators.required]),
    });
  }
  adddata()
  {
    // let trend=JSON.parse(localStorage.getItem("first"));
    // if(trend==null)
    // {
    //   trend=[];
    // }
    // trend.push(this.userform.value);
    // localStorage.setItem("first",JSON.stringify(trend));

   this.temp.setreg(this.userform.value).subscribe();
  }
}
         




