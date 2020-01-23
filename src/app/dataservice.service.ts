import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()/* {
  providedIn: 'root'
}) */
export class DataserviceService {
  
  constructor(private temp:HttpClient) { }
  setreg(x) {
    return this.temp.post("http://localhost:8083/Miniproj/Register",x);
  }
//  url="";
  

  getdata(data){
     return this.temp.post("http://localhost:8083/Stud_Drivetrack/CreateDrive",data);
} 
view(){
  return this.temp.get("http://localhost:8083/Stud_Drivetrack/ViewDriveServlet");
}
delete(did){
  return this.temp.post("http://localhost:8083/Stud_Drivetrack/DeleteServlet",did);
}
  edit(did){
    return this.temp.post("http://localhost:8083/Stud_Drivetrack/EditServlet",did);
  }
}
