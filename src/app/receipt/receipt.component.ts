import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MultiSearchService } from '../multi-search.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {
  invoice: number = Math.trunc(Math.random() * 24) + 1925;
  TransactionId: number = Math.trunc(Math.random() * 24) + 97235224124;
  today: number = Date.now();
  constructor(public service2:MultiSearchService,private router:Router) { }

  ngOnInit(): void {
  }
  closereceipt(){
    this.router.navigate(['/bannercard']);
  }
}
