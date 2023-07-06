import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { MultiSearchService, newCategoryData } from '../multi-search.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  tabIndex=0;
  walletImg: any;
  viewCardsBottom: any;
  clickTab(tabValue:MatTabChangeEvent){
      this.errorMessage=false;
      this.tabIndex=tabValue.index;
  }
  previous(){
    this.swapWallet=false;
  }
  netimag!: string;

  list = [{ name: "SBI", img: "../../assets/logos/SBI-logo.svg.webp" }, { name: "HDFC", img: "../../assets/logos/hdfclogo.png" }]
  netBValue!: string;
  pageNetBank!: boolean;
  pageNetTab = true;
  NetBankForm: any;
  show(value: string) {
    this.netimag = value;

  }

  cardDetails = [
    {
      cardnumber: '4555555555555555',
      validity: '12/26',
      cvv: 123,
      nameonCard: "Sanjeevkumar"
    },
    {
      cardnumber: '3555555555555555',
      validity: '04/27',
      cvv: 234,
      nameonCard: "Sanjeevkumar"
    },
    {
      cardnumber: '5555555555555555',
      validity: '04/28',
      cvv: 345,
      nameonCard: "Sanjeevkumar"
    },
    {
      cardnumber: '6555555555555555',
      validity: '04/26',
      cvv: 456,
      nameonCard: "Sanjeevkumar"
    }
  ]
  netBanking = [{ username: "Sanjeev1234", password: "Sanjeev@123" }, { username: "Rama1234", password: "Rama@123" }]
  upiPayments = [{ upiId: "Sanjeev@sbi" }, { upiId: "Rama@icici" }]
  wallets = [{ mobnum: "7036797552" }, { mobnum: "8425257975" }]
  reviewData = new Array<newCategoryData>();
  adObj = new addObject();
  pageTab = true;
  pageProcess!: boolean;
  carddetailsArray: any;
  pageSucess!: boolean;
  errorMessage!: boolean;
  cardImg!: string;
  hide = true;
  
  constructor(private snackbar: MatSnackBar, public service2: MultiSearchService, private router: Router) { }
  ngOnInit(): void {
    this.service2.getMultiData().subscribe((data) => {
      this.reviewData = data;
    });
    console.log(this.service2.reviewIndvdata);
    // this.walletImg=JSON.parse(localStorage.getItem("walletimage"))
  }
  /************************************************Cardpayment functions********************************/
  storeCardDetails(formvalue: addObject) {

    this.pageTab = false;
    this.pageProcess = true;
    setTimeout(() => {
      if (
        this.adObj.cardnumber &&
        this.adObj.cvv &&
        this.adObj.nameonCard &&
        this.adObj.validity
      ) {
        this.cardDetails.filter((cd) => {
          if (
            cd.cardnumber == this.adObj.cardnumber &&
            cd.cvv == this.adObj.cvv &&
            cd.nameonCard == this.adObj.nameonCard &&
            cd.validity == this.adObj.validity
          ) {
            this.pageTab = false;
            this.pageProcess = false;
            this.pageSucess = true;
            this.receiptShow();
          }
        });
        if (this.pageSucess != true) {
          this.pageTab = true;
          this.errorMessage = true;
          this.pageProcess = false;
          this.pageSucess = false;
        }
      }
    }, 2000);
  }
  receiptShow() {
    setTimeout(() => {
      this.pageTab = false;
      this.errorMessage = false;
      this.pageProcess = false;
      this.pageSucess = false;
      this.router.navigate(['/reciept']);
    }, 2500);
  }
  showCardInInput(value: any) {
    if (value.startsWith('3')) {
      this.cardImg = '../../assets/cardimages/americanExpress.png';
    }
    if (value.startsWith('4')) {
      this.cardImg = '../../assets/cardimages/visacarddd.png';
    }
    if (value.startsWith('5')) {
      this.cardImg = '../../assets/cardimages/mastercard.png';
    }
    if (value.startsWith('6')) {
      this.cardImg = '../../assets/cardimages/rupay.png';
    }
  }
  /************************************************NetBankingfunctions********************************/
  storeNetBAnkDetails(val: string) {
    this.pageTab = true;
    this.pageNetTab = false;
  }

  storeUserDetails(formvalue: addObject) {
    debugger;
    this.pageTab = false;
    this.pageProcess = true;
    setTimeout(() => {
      if (
        this.adObj.username &&
        this.adObj.password
      ) {
        this.netBanking.filter((cd) => {
          if (
            cd.username == this.adObj.username &&
            cd.password == this.adObj.password
          ) {
            this.pageTab = false;
            this.pageProcess = false;
            this.pageSucess = true;
            this.receiptShow();
          }
        });
        if (this.pageSucess != true) {
          this.pageTab = true;
          this.errorMessage = true;
          this.pageProcess = false;
          this.pageSucess = false;
        }
      }
    }, 2000);
  }
  /************************************************UPI paymentsfunctions********************************/

  storeupiDetails(formvalue: addObject) {

    this.pageTab = false;
    this.pageProcess = true;
    setTimeout(() => {
      if (
        this.adObj.upiid
      ) {
        this.upiPayments.filter((cd) => {
          if (
            cd.upiId == this.adObj.upiid
          ) {
            this.pageTab = false;
            this.pageProcess = false;
            this.pageSucess = true;
            this.receiptShow();
          }
        });
        if (this.pageSucess != true) {
          this.pageTab = true;
          this.errorMessage = true;
          this.pageProcess = false;
          this.pageSucess = false;
        }
      }
    }, 2000);
  }
  /************************************************Wallet paymentsfunctions********************************/
  swapWallet!:boolean;
  changeWalletPage(){
    this.swapWallet=true;

  }
  storewalletDetails(formvalue: addObject) {
    this.pageTab = false;
    this.pageProcess = true;
    setTimeout(() => {
      if (
        this.adObj.wallet
      ) {
        this.wallets.filter((cd) => {
          if (
            cd.mobnum == this.adObj.wallet
          ) {
            this.pageTab = false;
            this.pageProcess = false;
            this.pageSucess = true;
            this.receiptShow();
          }
        });
        if (this.pageSucess != true) {
          this.pageTab = true;
          this.errorMessage = true;
          this.pageProcess = false;
          this.pageSucess = false;
        }
      }
    }, 2000);
  }
  selectBank(val: string) {

    this.netBValue = val;
    if(val=="paytm"){
      localStorage.setItem("walletimage",JSON.stringify("../../assets/cardimages/paytmlogo.png"))
    }
    if(val=="phonepay"){
      localStorage.setItem("walletimage",JSON.stringify("../../assets/cardimages/phonepay.webp"))
    }
    if(val=="Googlepay"){
      localStorage.setItem("walletimage",JSON.stringify("../../assets/cardimages/googlepay.png"))
    }
    // if(val=="HDFC"){
    //   localStorage.setItem("walletimage",JSON.stringify("../../assets/cardimages/hdfcimg.png"))
    // }
    // if(val=="SBI"){
    //   localStorage.setItem("walletimage",JSON.stringify("../../assets/cardimages/sbiimg.png"))
    // }
    // if(val=="ICICI"){
    //   localStorage.setItem("walletimage",JSON.stringify("../../assets/cardimages/iciciimg.png"))
    // }
    // if(val=="AXIS"){
    //   localStorage.setItem("walletimage",JSON.stringify("../../assets/cardimages/axisimg.webp"))
    // }
    // if(val=="KOTAK"){
    //   localStorage.setItem("walletimage",JSON.stringify("../../assets/cardimages/kotakimg.jpg"))
    // }
    // if(val=="PNB"){
    //   localStorage.setItem("walletimage",JSON.stringify("../../assets/cardimages/pnbimg.webp"))
    // }
  }

}


export class addObject {
  cardnumber!: string;
  validity!: string;
  cvv!: number;
  nameonCard!: string;
  username!: string;
  password!: string;
  upiid!: string;
  wallet!: string;
}
