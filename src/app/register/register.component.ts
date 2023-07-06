import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  ///////////////////////formfields///////////////
  username: any = '';
  email: any = '';
  password: any = '';
  number: any = '';
  repassword: any = '';
  width!: number;
  height!: number;
  screen = 0;
  ////////////////////////////////////////////////////
  hide = true;
  hide1 = true;
  hide2 = true;
  regObj!: regObj;
  registrationUsers: Array<regObj> = new Array<regObj>();

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog
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
  registerSnacebar() {
    // this.spinnervisible=true;
    // setTimeout(()=>{this.spinnervisible=false},5000)
    this._snackBar.open('You are Successfully Registered', 'Thank You', {
      duration: 3000,
    });
  }
  goto() {
    // this.dialog.open(LoginComponent)
    this.router.navigate(['/login']);
  }
}
class regObj {
  username!: string;
  email!: string;
  mobile!: number;
  password!: string;
  repassword!: string;
}
