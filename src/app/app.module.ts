import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BikesComponent } from './bikes/bikes.component';
import { CarsComponent } from './cars/cars.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { HomesComponent } from './homes/homes.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HeaderComponent } from './header/header.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { BikesellComponent } from './bikesell/bikesell.component';
import { FullviewComponent } from './fullview/fullview.component';
import { SearchPipePipe } from './search-pipe.pipe';
import { LocationPipePipe } from './location-pipe.pipe';
import { CarSellingComponent } from './car-selling/car-selling.component';
import { IndividualReviewComponent } from './individual-review/individual-review.component';
import { CarsellingNavigateComponent } from './carselling-navigate/carselling-navigate.component';
import { BannerCardComponent } from './banner-card/banner-card.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    BikesComponent,
    CarsComponent,
    DialogboxComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    MobilesComponent,
    HomesComponent,
    ElectronicsComponent,
    HeaderComponent,
    WishlistComponent,
    BikesellComponent,
    FullviewComponent,
    SearchPipePipe,
    LocationPipePipe,
    BannerCardComponent,
    ReviewsComponent,
    SearchResultComponent,
    CarSellingComponent,
    IndividualReviewComponent,
    CarsellingNavigateComponent,
    CheckoutPageComponent,
    ReceiptComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    FlexLayoutModule,CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
