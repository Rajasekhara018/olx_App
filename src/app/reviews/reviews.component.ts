import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MultiSearchService, newCategoryData } from '../multi-search.service';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  reviewData = new Array<newCategoryData>();
  rating = 1;
  ratingArray = new Array<any>();
  starCount = 5;
  ratingRank = 'sentiment_very_satisfied';
 
  selling: boolean = false;
  constructor(
    public service2: MultiSearchService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    for (let i = 0; i < this.starCount; i++) {
      this.ratingArray.push(i);
    }
    this.loadReviews();
  }
  loadReviews() {
    this.reviewData = new Array<newCategoryData>();
    let t = localStorage.getItem('rateData');
    let ls = new Array<newCategoryData>();
    ls = t != null ? JSON.parse(t) : '';
    for (let i = 0; i <= ls.length; i++) {
     let element = ls[i];
        this.reviewData.push(element);
    }
    console.log(this.reviewData)
  }
  gotoReviewDetail(value: newCategoryData) {
    this.service2.reviewIndvdata = value;
    this.router.navigate(['/detailpage']);
  }
  showIcon(index: number) {
    if (this.rating>= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}
