import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormulaService } from '../../services/formula.service';


@Component({
  selector: 'app-driver-details',
  imports: [],
  templateUrl: './driver-details.component.html',
  styleUrl: './driver-details.component.css'
})
export class DriverDetailsComponent implements OnInit{
  selectedDriver: any;
  color: string = '';

  constructor (private route: ActivatedRoute,public formulaService: FormulaService){}

  ngOnInit(): void {
    const num = this.route.snapshot.params['driver'];
    const key: number = this.route.snapshot.params['session'];

    console.log("este es el driver", num, "y session", key);
    this.getDriver(num, key);
  }

  getDriver(num: number, key: number){
    this.formulaService.getDriver(num,key).subscribe({
      next: (data) => {
        console.log(data[0]);
        this.selectedDriver = data[0];
      },
      error: (e) => {
        console.log("Entra en error");
        console.log(e);
      }
    });
  }

  getBackgroundColor(driver: any): string {
    if (driver.driver_number === 43) {
      return '#64C4FF';
    }else if(driver.driver_number === 30){
      return '#3671C6';
    }else if(driver.driver_number === 61){
      return '#0093cc';
    }
    return '#' + driver.team_colour;
  }
}
