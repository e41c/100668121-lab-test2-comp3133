// src/app/spacex.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  constructor(private http: HttpClient) { }

  getMissions() {
    return this.http.get('https://api.spacexdata.com/v3/launches');
  }

  getMission(flight_number: number) {
    return this.http.get(`https://api.spacexdata.com/v3/launches/${flight_number}`);
  }
}
