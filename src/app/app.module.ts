import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from './material-module';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


import { AppComponent } from './app.component';
import { LoginfrmComponent } from './loginfrm/loginfrmcomponent';
import { Login2Component } from './login2/login2.component';
import { TpopgComponent } from './tpopg/tpopg.component';
import { AdminpgComponent } from './adminpg/adminpg.component';
import { CreatedriveComponent } from './createdrive/createdrive.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';
import { Routes, RouterModule } from '@angular/router';
import { ErrorpgComponent } from './errorpg/errorpg.component';
import { EditdriveComponent } from './editdrive/editdrive.component';
import { UpdatedataComponent } from './updatedata/updatedata.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

 const approute:Routes=[
  {path:'home',component:Login2Component,pathMatch:'full'},
  {path:'create',component:CreatedriveComponent,pathMatch:'full' },
  {path:'edit',component:EditdriveComponent},
  {path:'view',component:ViewComponent,pathMatch:'full'},
  {path:'update',component:CreatedriveComponent,pathMatch:'full'},
  {path:'',redirectTo:'/home',pathMatch:"full"},
  {path:'**',component:ErrorpgComponent,pathMatch:'full'}
  
];
 
@NgModule({
  declarations: [
    AppComponent,
    LoginfrmComponent,
    Login2Component,
    TpopgComponent,
    AdminpgComponent,
    CreatedriveComponent,
    RegisterComponent,
    ViewComponent,
    UpdatedataComponent,
    ErrorpgComponent,
    EditdriveComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,  RouterModule.forRoot(approute), BrowserAnimationsModule, MatNativeDateModule, 
    DemoMaterialModule, HttpClientModule, ReactiveFormsModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
