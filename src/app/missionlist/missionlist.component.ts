// src/app/missionlist/missionlist.component.ts

import { Component, OnInit } from '@angular/core';
import { SpaceXApiService } from '../network/spaceexapi.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-mission-list',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionListComponent implements OnInit {
  missions: Mission[] = [];

  constructor(private spaceXApiService: SpaceXApiService) { }

  ngOnInit(): void {
    this.loadMissions();
  }

  loadMissions(): void {
    this.spaceXApiService.getLaunches().subscribe(missions => {
      this.missions = missions;
    });
  }
}

