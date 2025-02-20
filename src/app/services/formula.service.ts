import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormulaService {
  readonly APIURL = "https://api.openf1.org/v1/drivers?session_key=latest";

  drivers: any[];

  constructor(private http: HttpClient) { 
    this.drivers = [];
  }

  getDrivers(){
    return this.http.get<any[]>(this.APIURL);
  }

  getDriver(num: number, key: number){
    return this.http.get<any[]>(`https://api.openf1.org/v1/drivers?driver_number=${num}&session_key=${key}`);
  }
  
}
