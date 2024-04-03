// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MissionListComponent } from './missionlist/missionlist.component';
import { MissionFilterComponent } from './missionfilter/missionfilter.component'; // Adjusted the path accordingly
import { MissiondetailsComponent } from './missiondetails/missiondetails.component'; // Adjusted the path accordingly

@NgModule({
  declarations: [
    AppComponent,
    MissionListComponent,
    MissionFilterComponent, // Adjusted component name
    MissiondetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
