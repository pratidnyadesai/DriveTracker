import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-updatedata',
  templateUrl: './updatedata.component.html',
  styleUrls: ['./updatedata.component.css'],
  providers:[DataserviceService]
})
export class UpdatedataComponent implements OnInit {

  cmpname = new FormControl('', [Validators.required]);
  noofres = new FormControl('', [Validators.required]);
  expreq = new FormControl('', [Validators.required]);
  ctc = new FormControl('', [Validators.required]);
  joincrt = new FormControl('', [Validators.required]);
  bond = new FormControl('', [Validators.required]);
  position = new FormControl('', [Validators.required]);
  followup = new FormControl('', [Validators.required]);
  educrt = new FormControl('', [Validators.required]);


  driveform: FormGroup = this.builder.group({
    
    cmpname: this.cmpname,
    noofres: this.noofres,
    expreq: this.expreq,
    ctc: this.ctc,
    joincrt: this.joincrt,
    bond: this.bond,
    position: this.position,
    followup: this.followup,
    educrt: this.educrt


  });
  constructor(private builder: FormBuilder, private _service: DataserviceService) { }

  ngOnInit() {
  }
  submit() {
    this._service.getdata(this.driveform.value).subscribe();
    console.log(this.driveform.value);


  }

}
