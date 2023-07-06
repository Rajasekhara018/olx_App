import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MultiSearchService, newCategoryData } from '../multi-search.service';
@Component({
  selector: 'app-carselling-navigate',
  templateUrl: './carselling-navigate.component.html',
  styleUrls: ['./carselling-navigate.component.scss'],
})
export class CarsellingNavigateComponent implements OnInit {
  success:boolean=false;
  successArray = new Array<newCategoryData>();
  constructor(
    private _formBuilder: FormBuilder,
    public service2: MultiSearchService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}
  sellingAuto(value: newCategoryData) {
    this.successArray.push(value);
    localStorage.setItem('productAuto', JSON.stringify(this.successArray));
    this.success = true;
    this.snackbar.open('Your form is submitted for selling', 'Thank you', {
      duration: 2500,
    });
  }
}
