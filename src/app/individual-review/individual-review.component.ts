import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { MultiSearchService, newCategoryData } from '../multi-search.service';
@Component({
  selector: 'app-individual-review',
  templateUrl: './individual-review.component.html',
  styleUrls: ['./individual-review.component.scss'],
})
export class IndividualReviewComponent implements OnInit {
  rating = 1;
  ratingArray1: any[] = [1, 2, 3, 4, 5];
  ratingArray = new Array<any>();
  starCount = 5;
  ratingRank = 'sentiment_very_satisfied';
  constructor(
    public service2: MultiSearchService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }
  reviewData = new Array<newCategoryData>();
  updatedJsonData = new Array<newCategoryData>();
  panelOpenState = false;
  ngOnInit(): void {
    this.service2.getMultiData().subscribe((data) => {
      this.reviewData = data;
    });
    for (let i = 0; i < this.starCount; i++) {
      this.ratingArray.push(i);
    }
  }
  submitRating(index: number, value: newCategoryData) {
    this.onChangeRating(index + 1, value)
    this.snackBar.open(
      'You rated ' + (this.rating) + ' / ' + this.starCount,
      '',
      {
        duration: 3000,
      }
    );
  }
  onChangeRating(rating:number, value: newCategoryData) {
    this.rating = rating;
    for (let i = 0; i <= this.reviewData.length; i++) {
      let element = this.reviewData[i];
      if (element.id == value.id) {
        element.starRating=value.rating
        break;
      }

    }
    localStorage.setItem('rateData', JSON.stringify(this.reviewData));
  }




  // onclick(index: number, value: newCategoryData) {

  //   for (let i = 0; i <= this.reviewData.length; i++) {
  //     let element = this.reviewData[i];
  //     if (element.id == value.id) {
  //       element.starRating = this.rating
  //       this.applyRating(index, value);
  //       break;
  //     }

  //   }
  //   localStorage.setItem('rateData', JSON.stringify(this.reviewData));
  // }
  // applyRating(index: number, value: newCategoryData) {
  //   debugger;
  //   this.rating = index + 1;
  //   this.snackBar.open(
  //     'You rated ' + (this.rating) + ' / ' + this.starCount,
  //     '',
  //     {
  //       duration: 3000,
  //     }
  //   );

  //   if (this.rating == 1) {
  //     this.ratingRank = 'mood_bad';
  //     let audio = new Audio();
  //     audio.src = "../assets/sounds/wrong-buzzer-6268.mp3"
  //     // audio.src="../assets/sounds/25096631_emoji-sound-of-cry_by_audiomechanica2_preview.mp3"
  //     audio.load();
  //     audio.play();

  //   }
  //   if (this.rating == 2) {
  //     this.ratingRank = 'sentiment_very_dissatisfied';
  //     let audio = new Audio();
  //     audio.src = "../assets/sounds/wrong-buzzer-6268.mp3"
  //     audio.load();
  //     audio.play();
  //   }
  //   if (this.rating == 3) {
  //     this.ratingRank = 'sentiment_dissatisfied';
  //     let audio = new Audio();
  //     audio.src = "../assets/sounds/wrong-buzzer-6268.mp3"
  //     // audio.src="../../assets/sounds/25096589_emoji-sound-angry_by_audiomechanica2_preview.mp3"
  //     audio.load();
  //     audio.play();

  //   }
  //   if (this.rating == 4) {
  //     this.ratingRank = 'sentiment_satisfied';
  //     let audio = new Audio();
  //     audio.src = "../../assets/sounds/magic-mallet-6262.mp3"
  //     audio.load();
  //     audio.play();
  //   }
  //   if (this.rating == 5) {
  //     this.ratingRank = 'sentiment_very_satisfied ';
  //     let audio = new Audio();
  //     audio.src = "../../assets/sounds/34900964_cartoon-voice-wee-with-laughter_by_applehillstudios_preview.mp3"
  //     audio.load();
  //     audio.play();
  //   }
  // }
  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}
