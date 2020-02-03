import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { FormGroup } from '@angular/forms';

import { EditdriveComponent } from '../editdrive/editdrive.component';
import { MatDialog } from '@angular/material/dialog';

export interface DialogData {
  cmpname: any;
  noofres: any;
  expreq: any;
  ctc: any;
  joincrt: any;
  bond: any;
  position: any;
  followup: any;
  educrt: any;
  did: any;
  gstnum: any;

}
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [DataserviceService]
})
export class ViewComponent implements OnInit {


  viewdrive: FormGroup;
  constructor(private _createService: DataserviceService, public dialog: MatDialog) {

  }
  data: any[];
  temp: any;
  ngOnInit() {

    this._createService.view().subscribe((e: any) => {
      return this.data = e

    });
    console.log(this.data);

  }
  sercmp: any = 'All';
  find=this.sercmp.ignoCase;
  deleteData(i) {
    this._createService.delete(i).subscribe(data => {
      console.log(data);
      confirm('Are you sure delete this data?');
      this.reloadData();
    });
  }
  reloadData() {
    this._createService.view().subscribe((e: any) => {
      return this.data = e
    });
  }
  cmpname: any;
  noofres: any;
  expreq: any;
  ctc: any;
  joincrt: any;
  bond: any;
  position: any;
  followup: any;
  educrt: any;
  did: any;
  gstnum: any;

  edit(e) {
    this.did = e.did;
    this.cmpname = e.cmpname;
    this.noofres = e.noofres;
    this.expreq = e.expreq;
    this.ctc = e.ctc;
    this.joincrt = e.joincrt;
    this.bond = e.bond;
    this.position = e.position;
    this.followup = e.followup;
    this.educrt = e.educrt;
    this.gstnum = e.gstnum;

  }

  openDialog() {
    const dialogRef = this.dialog.open(EditdriveComponent, {
      data: {
        did: this.did, cmpname: this.cmpname, noofres: this.noofres, expreq: this.expreq, ctc: this.ctc,
        joincrt: this.joincrt, bond: this.bond,
        position: this.position, followup: this.followup, educrt: this.educrt,gstnum:this.gstnum
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.reloadData();
    });
  }


}
