import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerCardComponent } from './banner-card/banner-card.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikesellComponent } from './bikesell/bikesell.component';
import { CarSellingComponent } from './car-selling/car-selling.component';
import { CarsComponent } from './cars/cars.component';
import { CarsellingNavigateComponent } from './carselling-navigate/carselling-navigate.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FullviewComponent } from './fullview/fullview.component';
import { HomesComponent } from './homes/homes.component';
import { IndividualReviewComponent } from './individual-review/individual-review.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { RegisterComponent } from './register/register.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: 'bikes', component: BikesComponent },
  { path: '', component: BannerCardComponent },
  { path: 'bannercard', component: BannerCardComponent },
  { path: 'search', component: SearchResultComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'mobiles', component: MobilesComponent },
  { path: 'homes', component: HomesComponent },
  { path: 'electronics', component: ElectronicsComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'bikesell', component: BikesellComponent },
  { path: 'fullview', component: FullviewComponent },
  { path: 'carselling', component: CarSellingComponent },
  { path: 'detailpage', component: IndividualReviewComponent },
  { path: 'csn', component: CarsellingNavigateComponent },
  {path:'checkout',component:CheckoutPageComponent},
  {path:'reciept',component:ReceiptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
