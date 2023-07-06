import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { Categorydata, ServicedataService } from '../servicedata.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  selectedLocation!: string;
  locations = ['Hyderabad', 'Chennai', 'Mumbai', 'Bangalore', 'Pune'];

  constructor(
    public dservice: ServicedataService,
    private _dialog: MatDialog,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    let t = localStorage.getItem('updatedData');
    if (t) {
      this.dservice.searchData = t != null ? JSON.parse(t) : '';
    } else {
      this.loadData();
    }
  }

  loadData() {
    this.dservice.getData().subscribe((data) => {
      this.dservice.searchData = data;
    });
  }
  addToWishList(data: Categorydata) {
    for (let i = 0; i <= this.dservice.searchData.length; i++) {
      let element = this.dservice.searchData[i];
      if (element.id == data.id) {
        element.isFav = true;
        this.dservice.wlCount++;
        this.snackbar.open('Added to wishlist', 'Close', {
          duration: 2000,
        });
        break;
      }
    }
    localStorage.setItem(
      'updatedData',
      JSON.stringify(this.dservice.searchData)
    );
  }

  remove(data: Categorydata, index: number) {
    for (let i = 0; i < this.dservice.searchData.length; i++) {
      let element = this.dservice.searchData[i];
      if (data.id == element.id) {
        element.isFav = false;
        this.dservice.wlCount--;
        this.snackbar.open('Removed from wishlist', 'Close', {
          duration: 2000,
        });
      }
    }
    localStorage.setItem(
      'updatedData',
      JSON.stringify(this.dservice.searchData)
    );
  }
  fullview(data:Categorydata) {
    this.dservice.fullview.push(data);
    this.router.navigate(['/fullview']);
  }
}
