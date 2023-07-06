import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ServicedataService {
  jsonURL = './assets/itemsdata.json';
  wlData = new Array<Categorydata>();
  seller: Array<any> = new Array<any>();
  wlCount = 0;
  fullview: Array<any> = new Array<any>();
  searchText = '';
  searchLocation = '';
  searchData = new Array<Categorydata>();
  seachPipeArray = new Array<Categorydata>();
  isSearchResFound!: Boolean;
  selected: boolean = true;
  selectedChange: any;
  logged!: Boolean;

  sellerData = localStorage.getItem('products');
  constructor(private http: HttpClient) {}
  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonURL);
  }
  onsearch(value: string, data: Array<Categorydata>) {
    if (value) {
      this.searchData = data.filter(function (ele, i, array) {
        let arrayelement = ele.category.toLowerCase();
        return arrayelement.includes(value);
      });

      if (this.searchData.length > 0) {
        this.isSearchResFound = true;
      } else {
        this.isSearchResFound = false;
      }
    }
  }

  onsearch1(value: string, data: Array<Categorydata>) {
    // if (value)
    // {
    //   this.searchData = data.filter(function (ele, i, array)
    //   {
    //     let arrayelement = (ele.location.toLowerCase())
    //     return arrayelement.includes(value);
    //   })
    // }
    // let val = value.toLowerCase();
    //   this.searchData = this..filter(element => {
    //     debugger
    //     if (this.uniqueId) {
    //       return ((element.name.toLowerCase().indexOf(val) >= 0 && element.subcategory == 'postalcode') || (element.description.toLowerCase().indexOf(val) >= 0 && element.subcategory == 'location')||(element.description.toLowerCase().indexOf(val) >= 0 && element.subcategory == 'make') || (element.description.toLowerCase().indexOf(val) >= 0 && element.subcategory == 'distance'));
    //     } else {
    //       return (element.name.toLowerCase().indexOf(val) >= 0 || element.description.toLowerCase().indexOf(val) >= 0 || element.category.toLowerCase().indexOf(val) >= 0);
    //     }
    //   })
  }
}
export class Categorydata {
  name!: string;
  category!: string;
  model!: string;
  price!: string;
  description!: string;
  imgurl!: string;
  location: any;
  id!: number;
  isFav!: boolean;
  iswl: any;
}
