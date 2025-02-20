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

  constructor (private route: ActivatedRoute,public userService: FormulaService){}

  ngOnInit(): void {
    const num = this.route.snapshot.params['driver'];
    const key: number = this.route.snapshot.params['session'];

    console.log("este es el driver", num, "y session", key);
    this.getDriver(num, key);
  }

  getDriver(num: number, key: number){
    this.userService.getDriver(num,key).subscribe({
      next: (data) => {
        console.log("Entra bien");
        this.selectedDriver = data;
      },
      error: (e) => {
        console.log("Entra en error");
        console.log(e);
      }
    });
  }
}
