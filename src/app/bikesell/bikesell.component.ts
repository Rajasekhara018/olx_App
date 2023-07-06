import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Categorydata, ServicedataService } from '../servicedata.service';

@Component({
  selector: 'app-bikesell',
  templateUrl: './bikesell.component.html',
  styleUrls: ['./bikesell.component.scss']
})
export class BikesellComponent implements OnInit {
  constructor(private dservice:ServicedataService,private snakebar:MatSnackBar) {}
  ngOnInit(): void {
  }
onsell(value:Categorydata){
  this.snakebar.open("Your Ad is placed", "Thank you", {duration:2500})
  this.dservice.seller.push(value);
  localStorage.setItem('product',JSON.stringify(this.dservice.seller));
}

}

