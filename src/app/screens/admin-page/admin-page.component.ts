import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SnackbarService } from 'src/app/snackbar';
import { AddItemDailogComponent } from '../add-item-dailog/add-item-dailog.component';
import { addItemModel } from './admin-page-model';
import { adminService } from './admin-page-service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  private postsub : Subscription;
  
  posts: addItemModel[] = [];


  constructor(private dailog: MatDialog, private adminpageservice: adminService, private router: Router, private snackbar: SnackbarService) { }

  ngOnInit() {
      this.getAddItem()
  }

  
  addItemDailog(){
      this.dailog.open(AddItemDailogComponent,{
          width: '25%',
      })
  }

  getAddItem(){
    this.adminpageservice.getItem();
     this.postsub = this.adminpageservice.getPostUpdateListener()
        .subscribe((posts: addItemModel[]) => {
            this.posts = posts;
        })
  }

  bookings(){
     this.router.navigate(['/adminorder']);
  }

  logOut(){
    this.router.navigate(['/']);
    this.snackbar.showMessage('LogOut Successfully....' );
  }
}
