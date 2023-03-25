import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/snackbar';
import { AdminLoginDailogComponent } from '../admin-login-dailog/admin-login-dailog.component';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.scss']
})
export class LoginscreenComponent implements OnInit {

  constructor(private dailog: MatDialog, private router: Router, private snackbar: SnackbarService) { }

  ngOnInit() {
  }

  adminLoginDailog(){
      this.dailog.open(AdminLoginDailogComponent,{
          width: '25%',
          // height: '25%'
      })
  }

  userLogin(){
    this.router.navigate(['/userpage']);
    this.snackbar.showMessage('User Login Successfully....' );
  }

}
