import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Categorydata, ServicedataService } from '../servicedata.service';

@Component({
  selector: 'app-fullview',
  templateUrl: './fullview.component.html',
  styleUrls: ['./fullview.component.scss'],
})
export class FullviewComponent implements OnInit {
  siteData = new Array<Categorydata>();
  router: any;
  iswl: boolean | undefined;
  constructor(
    public dservice: ServicedataService,
    private snakebar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.dservice.getData().subscribe((data) => {
      this.siteData = data;
    });
    this.loadData();
  }

  loadData() {
    this.dservice.getData().subscribe((data) => {
      this.dservice.searchData = data;
      // this.siteData = data;
      console.log(data);
    });
  }
  addToWishList(data: Categorydata) {
    this.dservice.selected = !this.dservice.selected;
    this.dservice.wlData.push(data);
    this.dservice.wlCount++;
    this.dservice.selected = false;
    this.snakebar.open('Added to wishlist', 'CLOSE', { duration: 2500 });
  }

  remove(data:Categorydata, index: number) {
    this.dservice.selected = true;
    for (let i = 0; i < this.dservice.wlData.length; i++) {
      if (index == +i) {
        this.iswl = true;
        this.dservice.wlData.splice(index, 1);
        this.dservice.wlCount--;
        this.snakebar.open('Removed from wishlist', 'Close', {
          duration: 2000,
        });
        data.iswl[index] = false;
      }
    }
    console.log('remove' + this.dservice.wlData.length);
  }
}
