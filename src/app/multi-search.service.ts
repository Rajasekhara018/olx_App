import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MultiSearchService {
  sellerAuto: Array<any> = new Array<any>();
  orderId: number = Math.trunc(Math.random() * 24) + 97235224124;
  //.............rating..........................
  rating: number = 6;
  ratingArray: any[] = [1, 2, 3, 4, 5];
  //.............................................
  jsonURL1 = './assets/automobiles.json';
  searchText1 = '';
  searchResult: boolean = false;
  starData = new Array<newCategoryData>();
  multiSearchData = new Array<newCategoryData>();
  rawData = new Array<newCategoryData>();
  reviewIndvdata = new newCategoryData();
  ratingRank = 'sentiment_very_satisfied';
  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  getMultiData(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonURL1);
  }
  multiSearchFunction(value: newCategoryData, data: Array<newCategoryData>) {
    if (value) {
      let pc = value.pincode.toLowerCase();
      let loc = value.location.toLowerCase();
      let mk = value.make.toLowerCase();
      let dist = value.distance.toLowerCase();

      this.multiSearchData = data.filter((element) => {
        if (pc && !loc && !mk && !dist) {
          return element.pincode.toLowerCase().indexOf(pc) >= 0;
        }
        if (pc == '' && loc && mk == '' && dist == '') {
          return element.location.toLowerCase().indexOf(loc) >= 0;
        }
        if (pc == '' && loc == '' && mk && dist == '') {
          return element.make.toLowerCase().indexOf(mk) >= 0;
        }
        if (pc == '' && loc == '' && mk == '' && dist) {
          return element.distance.toLowerCase().indexOf(dist) >= 0;
        }

        if (pc && loc && mk == '' && dist == '') {
          return (
            element.pincode.toLowerCase().indexOf(pc) >= 0 &&
            element.location.toLowerCase().indexOf(loc) >= 0
          );
        }

        if (pc == '' && loc == '' && mk && dist) {
          return (
            element.make.toLowerCase().indexOf(mk) >= 0 &&
            element.distance.toLowerCase().indexOf(dist) >= 0
          );
        }

        if (pc == '' && loc && mk && dist == '') {
          return (
            element.location.toLowerCase().indexOf(loc) >= 0 &&
            element.make.toLowerCase().indexOf(mk) >= 0
          );
        }

        if (pc == '' && loc && mk == '' && dist) {
          return (
            element.location.toLowerCase().indexOf(loc) >= 0 &&
            element.distance.toLowerCase().indexOf(dist) >= 0
          );
        }

        if (pc && loc == '' && mk == '' && dist) {
          return (
            element.pincode.toLowerCase().indexOf(pc) >= 0 &&
            element.distance.toLowerCase().indexOf(dist) >= 0
          );
        }

        if (pc && loc && mk == '' && dist) {
          return (
            element.pincode.toLowerCase().indexOf(pc) >= 0 &&
            element.distance.toLowerCase().indexOf(dist) >= 0 &&
            element.location.toLowerCase().indexOf(loc) >= 0
          );
        }
        if (pc && !loc && mk && dist) {
          return (
            element.pincode.toLowerCase().indexOf(pc) >= 0 &&
            element.distance.toLowerCase().indexOf(dist) >= 0 &&
            element.make.toLowerCase().indexOf(mk) >= 0
          );
        }
        if (pc && loc && mk && !dist) {
          return (
            element.pincode.toLowerCase().indexOf(pc) >= 0 &&
            element.make.toLowerCase().indexOf(mk) >= 0 &&
            element.location.toLowerCase().indexOf(loc) >= 0
          );
        }
        if (pc == null && loc && mk && dist) {
          return (
            element.make.toLowerCase().indexOf(mk) >= 0 &&
            element.distance.toLowerCase().indexOf(dist) >= 0 &&
            element.location.toLowerCase().indexOf(loc) >= 0
          );
        }
        if (pc && loc && mk && dist == null) {
          return (
            element.make.toLowerCase().indexOf(mk) >= 0 &&
            element.distance.toLowerCase().indexOf(pc) >= 0 &&
            element.location.toLowerCase().indexOf(loc) >= 0
          );
        }
        if (pc && loc && mk && dist) {
          return (
            element.pincode.toLowerCase().indexOf(pc) >= 0 &&
            element.make.toLowerCase().indexOf(mk) >= 0 &&
            element.distance.toLowerCase().indexOf(dist) >= 0 &&
            element.location.toLowerCase().indexOf(loc) >= 0
          );
        } else {
          return '';
        }
      });
    }
    if (this.multiSearchData.length > 0) {
      this.searchResult = false;
      if (
        this.router.url.startsWith('/bannercard') ||
        this.router.url.startsWith('')
      ) {
        this.router.navigate(['/search']);
      }
    } else {
      this.searchResult = true;
    }
  }
  onclick(index: number, value: newCategoryData) {
    this.rating = index + 1;
    // localStorage.setItem('StarArray', JSON.stringify(index));
    this.snackBar.open(
      'You rated ' + (this.rating - 1) + ' / ' + this.ratingArray[4],
      '',
      {
        duration: 3000,
      }
    );
    
    if(this.rating -1 == 1){
      this.ratingRank = 'mood_bad';
      let audio=new Audio();
      audio.src="../assets/sounds/wrong-buzzer-6268.mp3"
      // audio.src="../assets/sounds/25096631_emoji-sound-of-cry_by_audiomechanica2_preview.mp3"
      audio.load();
      audio.play();
      
    }
    if(this.rating -1 == 2){
      this.ratingRank = 'sentiment_very_dissatisfied';
      let audio=new Audio();
      audio.src="../assets/sounds/wrong-buzzer-6268.mp3"
      audio.load();
      audio.play();
    }
    if(this.rating -1 == 3){
      this.ratingRank = 'sentiment_dissatisfied';
      let audio=new Audio();
      audio.src="../assets/sounds/wrong-buzzer-6268.mp3"
      // audio.src="../../assets/sounds/25096589_emoji-sound-angry_by_audiomechanica2_preview.mp3"
      audio.load();
      audio.play();
      
    }
    if(this.rating -1 == 4){
      this.ratingRank = 'sentiment_satisfied';
      let audio=new Audio();
      audio.src="../../assets/sounds/magic-mallet-6262.mp3"
      audio.load();
      audio.play();
    }
    if(this.rating -1 == 5){
      this.ratingRank = 'sentiment_very_satisfied ';
      let audio=new Audio();
      audio.src="../../assets/sounds/34900964_cartoon-voice-wee-with-laughter_by_applehillstudios_preview.mp3"
      audio.load();
      audio.play();
    }
  }
  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}
export class newCategoryData {
  name!: string;
  category!: string;
  model!: string;
  price!: string;
  description!: string;
  imgurl!: string;
  location!: string;
  id!: number;
  isFav!: boolean;
  distance!: string;
  pincode!: string;
  make!: string;
  seats!: number;
  fuel!: string;
  yearofreg!: string;
  bodyType!: string;
  kms!: string;
  mode!: string;
  engine!: string;
  sellerInfo!: string;
  title!: string;
  subtitle!: string;
  imgurl1!: string;
  imgurl2!: string;
  rating: any;
  description1!: string;
  imgname!: string;
  description2!: string;
  description3!: string;
  video: any;
  view!: string;
  emission!:string;
   maxpower!:string;
   topspeed!:string;
   seatadjust!:string;
   enginedisplay!:string;
   torque!:string;
   adjustfrontseat!:string;
   starRating!:number;
}

/**  onclick1(index: number, value: newCategoryData) {
    this.rating = index + 1;
    localStorage.setItem('StarArray', JSON.stringify(index));
    this.snackBar.open(
      'You rated ' + (this.rating - 1) + ' / ' + this.ratingArray[4],
      '',
      {
        duration: 3000,
      }
    );
  }
  continue(index: number, value: newCategoryData) {
    for (let i = 0; i <= this.rawData.length; i++) {
      let element = this.rawData[i];
      if (element.id == value.id) {
        element.rating.push(index);
        localStorage.setItem('rateData', JSON.stringify(this.rawData));
      }
    }
  }
  onclick(index: number, value: newCategoryData) {
    this.getMultiData().subscribe((data) => {
      this.rawData = data;
      this.continue(index, value);
    });
  }

  showIcon1(index: number) {
    debugger;
    if (index + 1 <= 6) {
      return 'star';
    } else {
      return 'star_border';
    }
  } */
