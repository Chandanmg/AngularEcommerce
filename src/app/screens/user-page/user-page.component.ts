import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SnackbarService } from 'src/app/snackbar';
import { addItemModel } from '../admin-page/admin-page-model';
import { adminService } from '../admin-page/admin-page-service';
import { userService } from './user-page-service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  
  private postsub : Subscription;
  
  posts: addItemModel[] = [];

  name ="";
  price = 0;
  url = "";


  constructor(private adminpageservice: adminService, private http: HttpClient, private userservice: userService, private router: Router, private snackbar: SnackbarService) { }

  ngOnInit() {
    this.getData()
  }

  

  getData(){
    this.adminpageservice.getItem();
     this.postsub = this.adminpageservice.getPostUpdateListener()
        .subscribe((posts: addItemModel[]) => {
            this.posts = posts;
        })
  }

  addCart(name: string){
    this.http.get<{message: string, posts: any}>(`http://localhost:3000/getAddItem/`+ name)
    .subscribe(post => {
      // console.log(post);
      this.name = post.posts.itemname;
      this.price = post.posts.price;
      this.url = post.posts.url;
      // console.log(this.name);

      this.userservice.addtocart(this.name, this.price, this.url);
      this.snackbar.showMessage('Added Successfully....' );
    })

    // console.log(this.name);

    // this.userservice.addtocart(this.name, this.price, this.url)
  

  }

  goCart(){
      this.router.navigate(['/usercart'])
  }

  logOut(){
    this.router.navigate(['/']);
    this.snackbar.showMessage('LogOut Successfully....' );
  }

  selectedItem: any; 

  showInfo(item: any) {
    this.selectedItem = item;
  }

  hideInfo() {
    this.selectedItem = null; 
  }


}

