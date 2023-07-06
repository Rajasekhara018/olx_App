import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Categorydata, ServicedataService } from '../servicedata.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  siteData=new Array<Categorydata>();
  iswl: boolean | undefined;
  constructor(public dservice:ServicedataService,private snakebar:MatSnackBar ) { }


  ngOnInit() {
      this.dservice.getData().subscribe(data => {
      this.siteData = data;
    });
  }
  addToWishList(data: Categorydata) {
    for (let i = 0; i <= this.dservice.searchData.length; i++)
    {
      let element = this.dservice.searchData[i];
      if (element.id == data.id) {
        element.isFav = true;
        this.dservice.wlCount++;
        this.snakebar.open('Added to wishlist', 'Close', {
          duration: 2000,
        });
        break;
      }
    }
    localStorage.setItem(
      'updatedJson',
      JSON.stringify(this.dservice.searchData)
    );
  }

  remove(data: Categorydata, index: number) {
    for (let i = 0; i < this.dservice.searchData.length; i++) {
      let element = this.dservice.searchData[i];
      if (data.id == element.id) {
        element.isFav = false;
        this.dservice.wlCount--;
        this.snakebar.open('Removed from wishlist', 'Close', {
          duration: 2000,
        });
      }
    }
    localStorage.setItem(
      'updatedJson',
      JSON.stringify(this.dservice.searchData)
    );
  }
filterCategory(cat: Categorydata[]): Categorydata[] {
      return this.siteData.filter(p => p.category == 'cars');
    }
}
