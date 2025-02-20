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

  getDrivers(){
    this.formulaService.getDrivers().subscribe({
      next: (data) => {
        this.formulaService.drivers = data;
        console.log(data);
      },
      error: (e) => {
        console.log("Entra en el error");
        console.log(e);
      }
    })
  }
}
