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
        comment: "Verstappen es imparable esta temporada. Con su habilidad excepcional en la pista, ha demostrado ser un piloto dominante. Su estrategia durante las carreras y su capacidad para manejar cualquier situación lo convierten en un competidor formidable. ¡Estoy seguro de que seguirá cosechando victorias!",
        fecha: "05/01/2025"
      },
      {
        user: "LewisLover",
        comment: "Hamilton sigue siendo el mejor. A pesar de su edad, sigue demostrando por qué es uno de los pilotos más talentosos de la Fórmula 1. Su experiencia y habilidad en la pista son inigualables. Cada vez que sube a su coche, sabe exactamente cómo sacar el máximo rendimiento. ¡Es un placer verlo competir!",
        fecha: "06/01/2025"
      },
      {
        user: "FerrariFan",
        comment: "Vettel regresará con Ferrari este año. Después de un tiempo fuera de la escudería, está listo para volver a demostrar por qué es uno de los pilotos más queridos por los fans. Su pasión por la Fórmula 1 y su dedicación al equipo lo hacen un miembro valioso. Estoy emocionado de ver cómo se desempeñará en la próxima temporada.",
        fecha: "27/02/2025"
      },
      {
        user: "AlpineSupporter",
        comment: "Alonso está haciendo un trabajo increíble con Alpine. A pesar de las dificultades del coche, siempre encuentra la forma de sacar el máximo rendimiento. Su experiencia y habilidad en la pista son evidentes en cada carrera. Es un placer verlo competir y estoy seguro de que seguirá sorprendiéndonos con sus actuaciones.",
        fecha: "11/02/2025"
      },
      {
        user: "RedBullRacer",
        comment: "Red Bull dominará las carreras este año. Con un coche potente y pilotos talentosos, están listos para llevarse todas las victorias. Su estrategia durante las carreras y su capacidad para adaptarse a cualquier situación los convierte en un equipo formidable. Estoy emocionado de ver cómo se desempeñarán en la próxima temporada.",
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
