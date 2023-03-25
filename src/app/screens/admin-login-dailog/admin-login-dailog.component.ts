import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/snackbar';

@Component({
  selector: 'app-admin-login-dailog',
  templateUrl: './admin-login-dailog.component.html',
  styleUrls: ['./admin-login-dailog.component.scss']
})
export class AdminLoginDailogComponent implements OnInit {

  constructor(private router: Router, private dailog: MatDialog, private snackbar: SnackbarService) { }

  ngOnInit() {
  }

  adminPage(form: NgForm){
    if(form.invalid){
        return;
    }
    this.dailog.closeAll()
    this.router.navigate(['/adminpage']);
    this.snackbar.showMessage('Admin Login Successfully....' );
  }
}
