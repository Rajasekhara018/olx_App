import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MultiSearchService, newCategoryData } from '../multi-search.service';
import { ServicedataService } from '../servicedata.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  name: any = '';
  email: any = '';
  location: any = '';
  phone: any = '';
  bookValue!: boolean;
  catObj = new newCategoryData();

  rawData = new Array<newCategoryData>();
  bookArray: Array<booking> = new Array<booking>();
  bookingComplete!: boolean;
  bookingObj = new booking();
  constructor(public service2: MultiSearchService, private router: Router, private dservice: ServicedataService, private snackbar: MatSnackBar) { }
  ngOnInit(): void {
    this.service2.getMultiData().subscribe((data) => {
      this.rawData = data;
    });
    this.service2.searchResult = false;
    this.catObj = this.service2.multiSearchData[0];
    this.bookingObj = new booking();
  }
  multiSearch(val: newCategoryData) {
    this.service2.multiSearchFunction(val, this.rawData);
  }
  searchFunction(value: newCategoryData) {
    this.service2.reviewIndvdata = value;
    this.router.navigate(['/detailpage']);
  }
  booking() {
    this.bookValue = true;
  }
  carbooking(data: newCategoryData) {
    this.service2.reviewIndvdata = data;
    this.router.navigate(['/checkout']);
  }
  onBook(book: booking) {
    this.bookArray.push(book);
    localStorage.setItem('bookingAuto', JSON.stringify(this.bookArray));
    this.bookingComplete = true;
    this.snackbar.open('Your Booking request is received', 'Thank you', {
      duration: 2500,
    });
  }
}
export class booking {
  name!: string;
  location!: string;
  phone!: string;
  email!: string;
}