import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MultiSearchService, newCategoryData } from '../multi-search.service';

@Component({
  selector: 'app-banner-card',
  templateUrl: './banner-card.component.html',
  styleUrls: ['./banner-card.component.scss'],
})
export class BannerCardComponent implements OnInit {
  bannerResult: boolean = false;
  browse = [
    {
      name: 'Audi',
      imgPath: 'https://www.freepnglogos.com/uploads/audi-logo-2.png',
    },
    {
      name: 'BMW',
      imgPath:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png',
    },
    {
      name: 'FORD',
      imgPath:
        'https://logodownload.org/wp-content/uploads/2014/02/ford-logo-3.png',
    },
    {
      name: 'Mercedes-Benz',
      imgPath:
        'https://pngimg.com/uploads/mercedes_logos/mercedes_logos_PNG32.png',
    },
  ];
  rawData = new Array<newCategoryData>();
  constructor(public service2: MultiSearchService, private router: Router) {}

  ngOnInit(): void {
    this.service2.getMultiData().subscribe((data) => {
      // this.service2.multiSearchData = data;
      this.rawData = data;
    });
    this.service2.searchResult = false;
  }

  multiSearch(value: newCategoryData) {
    this.service2.multiSearchFunction(value, this.rawData);
  }
  browseByFn(value: string) {
    if (value) {
      this.service2.multiSearchData = this.rawData.filter(function (
        ele,
        i,
        array
      ) {
        let arrayelement = ele.make.toLowerCase();
        return arrayelement.includes(value.toLowerCase());
      });
      if (this.service2.multiSearchData.length > 0) {
        this.service2.searchResult = true;
        this.router.navigate(['/search']);
      } else {
        this.service2.searchResult = false;
      }
    }
  }
}
