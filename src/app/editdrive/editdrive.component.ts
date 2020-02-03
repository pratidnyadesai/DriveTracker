import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataserviceService } from '../dataservice.service';
import { DialogData } from '../view/view.component';


@Component({
  selector: 'app-editdrive',
  templateUrl: './editdrive.component.html',
  styleUrls: ['./editdrive.component.css'],
  providers: [DataserviceService]
})
export class EditdriveComponent implements OnInit {
  did = new FormControl('', [Validators.required]);
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
    did: this.did,
    cmpname: this.cmpname,
    noofres: this.noofres,
    expreq: this.expreq,
    ctc: this.ctc,
    joincrt: this.joincrt,
    bond: this.bond,
    position: this.position,
    followup: this.followup,
    educrt: this.educrt,

  });
  constructor(private builder: FormBuilder, private _service: DataserviceService, public dialogRef: MatDialogRef<EditdriveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  temp;
  ngOnInit() {
  }
  submit() {
    this._service.edit(this.driveform.value).subscribe((x) => this.temp = x);

    confirm("Data is Update");
  }

}
