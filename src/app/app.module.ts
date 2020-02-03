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
import { Login2Component } from './login2/login2.component';

import { CreatedriveComponent } from './createdrive/createdrive.component';
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
import { NavComponent } from './nav/nav.component';


const approute: Routes = [
  { path: 'login', component: Login2Component, pathMatch: 'full' },
  {
    path: 'welcm', component: NavComponent,
    children: [
      { path: 'create', component: CreatedriveComponent  },
      { path: 'view', component: ViewComponent }
    ]
  },


  { path: 'edit', component: EditdriveComponent },

  { path: 'update', component: CreatedriveComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: ErrorpgComponent, pathMatch: 'full' }

];

@NgModule({
  declarations: [
    AppComponent,
    Login2Component,
    CreatedriveComponent,
    ViewComponent,
    UpdatedataComponent,
    ErrorpgComponent,
    EditdriveComponent,
    MainNavComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, RouterModule.forRoot(approute), BrowserAnimationsModule, MatNativeDateModule,
    DemoMaterialModule, HttpClientModule, ReactiveFormsModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }