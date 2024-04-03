// src/app/missionfilter/missionfilter.component.ts

import { Component, Input } from '@angular/core';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-mission-filter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionFilterComponent {
  @Input() mission!: Mission;

  constructor() { }
}