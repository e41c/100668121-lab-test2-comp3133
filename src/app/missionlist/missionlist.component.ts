// src/app/missionlist/missionlist.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.spacexdata.com/v3/launches').subscribe(res => {
      this.missions = res;
    });
  }
}
