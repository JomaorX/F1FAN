import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Coment from '../models/coment';

@Injectable({
  providedIn: 'root'
})
export class FormulaService {
  readonly APIURL = "https://api.openf1.org/v1/drivers?session_key=latest";
coments: Coment[];
  drivers: any[];

  constructor(private http: HttpClient) { 
    this.drivers = [];
    this.coments = [
      {
        user: "MaxFan",
        comment: "Verstappen es imparable esta temporada!",
        fecha: "05/01/2025"
      },
      {
        user: "LewisLover",
        comment: "Hamilton sigue siendo el mejor!",
        fecha: "06/01/2025"
      },
      {
        user: "FerrariFan",
        comment: "Vettel regresará con Ferrari este año!",
        fecha: "27/02/2025"
      },
      {
        user: "AlpineSupporter",
        comment: "Alonso está haciendo un trabajo increíble con Alpine.",
        fecha: "11/02/2025"
      },
      {
        user: "RedBullRacer",
        comment: "Red Bull dominará las carreras este año!",
        fecha: "18/02/2025"
      }
    ];
  }

  getDrivers(){
    return this.http.get<any[]>(this.APIURL);
  }

  getDriver(num: number, key: number){
    return this.http.get<any[]>(`https://api.openf1.org/v1/drivers?driver_number=${num}&session_key=${key}`);
  }

  addComment(com: Coment){
    this.coments.push(com);
  }
  
}
