import { Component, OnInit } from '@angular/core';

import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-createdrive',
  templateUrl: './createdrive.component.html',
  styleUrls: ['./createdrive.component.css'],
  providers:[DataserviceService]
})
export class CreatedriveComponent implements OnInit {

  cmpname = new FormControl('', [Validators.required]);
  noofres = new FormControl('', [Validators.required]);
  expreq = new FormControl('', [Validators.required]);
  ctc = new FormControl('', [Validators.required]);
  joincrt = new FormControl('', [Validators.required]);
  bond = new FormControl('', [Validators.required]);
  position = new FormControl('', [Validators.required]);
  followup = new FormControl('', [Validators.required]);
  educrt = new FormControl('', [Validators.required]);
  gstnum=new FormControl('',[Validators.required,Validators.maxLength(15),Validators.pattern("^[0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9A-Za-z]{1}[Z]{1}[0-9a-zA-Z]{1}")]);


  driveform: FormGroup = this.builder.group({
    
    cmpname: this.cmpname,
    noofres: this.noofres,
    expreq: this.expreq,
    ctc: this.ctc,
    joincrt: this.joincrt,
    bond: this.bond,
    position: this.position,
    followup: this.followup,
    educrt: this.educrt,
    gstnum:this.gstnum


  });
  constructor(private builder: FormBuilder, private _service: DataserviceService) { }

  ngOnInit() {
  }
  submit() {
    this._service.getdata(this.driveform.value).subscribe();
    alert("Data is Sucessfully Created");
    console.log(this.driveform.value);


  }

}
