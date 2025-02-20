import { Component, OnInit } from '@angular/core';
import { FormulaService } from '../../services/formula.service';
import { HeaderComponent } from "../../components/header/header.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-drivers',
  imports: [RouterLink],
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.css'
})
export class DriversComponent implements OnInit{

  constructor(public formulaService: FormulaService){};

  ngOnInit(): void {
    this.getDrivers();
  }

  getDrivers() {
    this.formulaService.getDrivers().subscribe({
        next: (data) => {
            // Ordena los pilotos por equipo
            const sortedDrivers = data.sort((a, b) => {
                if (a.team_name < b.team_name) {
                    return -1;
                }
                if (a.team_name > b.team_name) {
                    return 1;
                }
                return 0;
            });

            // Asigna los pilotos ordenados a drivers
            this.formulaService.drivers = sortedDrivers;

            console.log(sortedDrivers);
        },
        error: (e) => {
            console.log("Entra en el error");
            console.log(e);
        }
    });
}
}
