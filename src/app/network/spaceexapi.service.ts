import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root'
})
export class SpaceXApiService {
  private apiUrl = 'https://api.spacexdata.com/v3';

  constructor(private http: HttpClient) { }

  getLaunches(): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.apiUrl}/launches`);
  }

  getLaunchByYear(year: number): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.apiUrl}/launches?launch_year=${year}`);
  }

  getLaunchByFlightNumber(flightNumber: string): Observable<Mission> {
    return this.http.get<Mission>(`${this.apiUrl}/launches/${flightNumber}`);
  }
}
