// src/app/mission-filter/mission-filter.component.ts

// src/app/mission-filter/mission-filter.component.ts

import { Component, Input } from '@angular/core';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-mission-filter',
  templateUrl: './mission-filter.component.html',
  styleUrls: ['./mission-filter.component.css']
})
export class MissionFilterComponent {
  @Input() mission!: Mission;

  constructor() { }
}
