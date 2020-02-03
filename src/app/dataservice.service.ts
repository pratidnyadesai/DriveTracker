import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()/* {
  providedIn: 'root'
}) */
export class DataserviceService {

  constructor(private temp: HttpClient) { }

  login(l) {
    return this.temp.post("http://3.133.141.231:8080/Stud_Drivetrack/log", l);
  }
  setreg(x) {
    return this.temp.post("http://3.133.141.231:8080/Stud_Drivetrack/Register", x);
  }

  getdata(data) {
    return this.temp.post("http://3.133.141.231:8080/Stud_Drivetrack/CreateDrive", data);
  }
  view() {
    return this.temp.get("http://3.133.141.231:8080/Stud_Drivetrack/ViewDriveServlet");
  }

  delete(did) {
    return this.temp.post("http://3.133.141.231:8080/Stud_Drivetrack/DeleteServlet", did);
  }
  edit(did) {
    return this.temp.post("http://3.133.141.231:8080/Stud_Drivetrack/EditServlet", did);
  }
}
