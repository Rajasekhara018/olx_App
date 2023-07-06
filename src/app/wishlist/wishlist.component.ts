import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Categorydata, ServicedataService } from '../servicedata.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  constructor(
    public dservice: ServicedataService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites() {
    this.dservice.wlData = new Array<Categorydata>();
    let t = localStorage.getItem('updatedData');
    let ls = new Array<Categorydata>();
    ls = t != null ? JSON.parse(t) : '';
    for (let i = 0; i <= ls.length; i++) {
      let element = ls[i];
      if (element.isFav) {
        this.dservice.wlData.push(element);
      }
    }
  }
  remove(data: Categorydata) {
    let t = localStorage.getItem('updatedData');
    let ls = new Array<Categorydata>();
    ls = t != null ? JSON.parse(t) : '';
    for (let i = 0; i < ls.length; i++) {
      let element = ls[i];
      if (data.id == element.id) {
        element.isFav = false;
        this.dservice.wlCount--;
        this.snackbar.open('Removed from wishlist', 'Close', {
          duration: 2000,
        });
      }
    }
    localStorage.setItem('updatedData', JSON.stringify(ls));
    this.loadFavorites();
  }
}
