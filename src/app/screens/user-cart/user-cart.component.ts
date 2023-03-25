import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SnackbarService } from 'src/app/snackbar';
import { adminOrderService } from '../admin-order/admin-order-service';
import { userCartModel } from '../user-page/user-page-model';
import { userService } from '../user-page/user-page-service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {

  private postsub : Subscription;
  
  posts: userCartModel[] = [];

  price =  0;

  

  dataSource: MatTableDataSource<userCartModel>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor( private userservice: userService, private router: Router, private dailog: MatDialog, private adminoredrservice: adminOrderService, private snackbar: SnackbarService) { }

  displayedColumns: string[] = ['sl', 'image', 'name', 'quantity', 'price', 'delete'];

  ngOnInit() {
    this.getCartItems();
  }

  // product: any =[]

  private total=0;    
  private value; 

  getCartItems(){
    this.userservice.getCartItem();
     this.postsub = this.userservice.getPostUpdateListener()
        .subscribe((posts: userCartModel[]) => {
            this.posts = posts;
            this.findsum(this.posts);
            this.dataSource = new MatTableDataSource(this.posts);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        })
        
  }

  onDelete(id: string){
    // console.log(id);
    this.userservice.deleteItem(id);
    this.snackbar.showMessage('Deleted Successfully....' );
  }

  findsum(data){    
    // debugger  
    this.value=data    
    // console.log(this.value);  
    for(let j=0;j<data.length;j++){   
         this.total+= this.value[j].price  
        //  console.log(this.total)  
    }  
    this.price = this.total 
  }

  goShop(){
    this.router.navigate(['/userpage'])
  }

  checkoutDailog(){
    //  this.dailog.open(CheckoutdailogComponent,{
    //     width: '25%'
    //  })

     this.adminoredrservice.addOrder(this.posts);
     this.userservice.deleteAllItem();
     this.snackbar.showMessage('Items Ordered Successfully....' );
  }

  logOut(){
    this.router.navigate(['/']);
    this.snackbar.showMessage('Logout Successfully....' );
  }

}
