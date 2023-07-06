import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { Location } from '@angular/common';
import { ServicedataService } from '../servicedata.service';
RegisterComponent;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  ///////////////////////formfields///////////////
  username: any = '';
  email: any = '';
  password: any = '';
  number: any = '';
  repassword: any = '';
  width!: number;
  height!: number;
  screen = 0;
  /////////////////////////////////////////////////////
  spinnervisible = false;
  spinner = false;
  hide = true;
  hide1 = true;
  hide2 = true;
  regObj!: regObj;
  registrationUsers: Array<regObj> = new Array<regObj>();

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    private location: Location,
    private dservice: ServicedataService
  ) {}

  ngOnInit(): void {
    this.regObj = new regObj();
  }
  onRegister(formvalue: regObj) {
    this.registrationUsers.push(formvalue);
    localStorage.setItem(
      'registrationUsers',
      JSON.stringify(this.registrationUsers)
    );
  }

  onlogin() {
    let a = JSON.parse(localStorage.getItem('registrationUsers')!);
    this.dservice.logged = true;
    if (a.length > 0) {
      a.forEach((element: any) => {
        if (
          element.email === this.regObj.email &&
          element.password === this.regObj.password
        ) {
          this.router.navigate(['']);
          localStorage.setItem('data', JSON.stringify(this.registrationUsers));
        } else {
          this._snackBar.open("You Doesn't Have Account", 'Click on Create', {
            duration: 3000,
          });
        }
      });
    }
  }

  //  registerSnacebar(){

  //    // this.spinnervisible=true;
  //    // setTimeout(()=>{this.spinnervisible=false},5000)
  //    this._snackBar.open("You are Successfully Registered",'Thank You',{duration:3000});
  //    this.router.navigate(['login']);
  //  }

  oncreate() {
    this.router.navigate(['register']);
    // this.dialog.open(RegisterComponent)
  }
}
class regObj {
  email!: string;
  password!: string;
}
