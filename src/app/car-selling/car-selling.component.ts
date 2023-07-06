import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-selling',
  templateUrl: './car-selling.component.html',
  styleUrls: ['./car-selling.component.scss'],
})
export class CarSellingComponent implements OnInit {
  registrationDetails: any[] = [
    { registration: 'NU 21 REG' },
    { registration: 'BG 25 VIR' },
    { registration: 'BD 51 SMR' },
    { registration: 'HU 55 SEY' },
    { registration: 'AS 52 RXZ' },
    { registration: 'TP 52 REG' },
  ];
  istrue: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onClick(value: registerObj) {
    debugger;
    for (let i = 0; i <= this.registrationDetails.length; i++)
      if (value.Registration === this.registrationDetails[i].registration){
        this.router.navigate(['/csn']);
      } else {
        this.istrue = true;
      }
  }
}
export class registerObj {
  Registration!: string;
}
