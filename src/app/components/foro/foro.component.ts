import { Component } from '@angular/core';
import { FormulaService } from '../../services/formula.service';

@Component({
  selector: 'app-foro',
  imports: [],
  templateUrl: './foro.component.html',
  styleUrl: './foro.component.css'
})
export class ForoComponent {
  constructor(public formulaService: FormulaService){}
  // comentarios: Coment[] = [
  //   {
  //     user: "MaxFan",
  //     comment: "Verstappen es imparable esta temporada!",
  //     fecha: "05/01/2025"
  //   },
  //   {
  //     user: "LewisLover",
  //     comment: "Hamilton sigue siendo el mejor!",
  //     fecha: "06/01/2025"
  //   },
  //   {
  //     user: "FerrariFan",
  //     comment: "Vettel regresará con Ferrari este año!",
  //     fecha: "27/02/2025"
  //   },
  //   {
  //     user: "AlpineSupporter",
  //     comment: "Alonso está haciendo un trabajo increíble con Alpine.",
  //     fecha: "11/02/2025"
  //   },
  //   {
  //     user: "RedBullRacer",
  //     comment: "Red Bull dominará las carreras este año!",
  //     fecha: "18/02/2025"
  //   }
  // ];

}
