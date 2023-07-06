import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { Categorydata, ServicedataService } from '../servicedata.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  login: boolean = false;
  siteData = new Array<Categorydata>();
  // systemData=new Array<Categorydata>();
  // systemData=new Array<Categorydata>();
  selectedLocation!: string;
  isSearchResFound!: boolean;
  locations = ['Hyderabad', 'Chennai', 'Mumbai', 'Bangalore', 'Pune'];
  constructor(
    private _dialog: MatDialog,
    private router: Router,
    public dservice: ServicedataService
  ) {}

  ngOnInit(): void {
    this.dservice.getData().subscribe((data) => {
      this.siteData = data;
    });
    //................................weekday................
    // const time = new Date().getHours();
    // let greeting: string;
    // if (time < 12) {
    //   greeting = "Good morning";
    // }else if (time < 16) {
    //   greeting = "Good afternoon";
    // }else if(time < 20) {
    //   greeting = "Good evening";
    // } else {
    //   greeting = "Good Night";
    // }
    // document.getElementById("demo").innerHTML = greeting;
    //..........................................................
  }
  onlogin() {
    // this._dialog.open(LoginComponent)
    this.router.navigate(['/login']);
  }
  // callSearch(value:string){
  //   this.dservice.onsearch(value,this.siteData)
  // }
  goToWishList() {
    this.router.navigate(['/wishlist']);
  }

  logout() {
    this.dservice.logged = false;
    this.siteData.length = 0;
  }

  // locationSearch(search:string){
  //   this.dservice.onsearch1(search,this.siteData)
  // }
}
