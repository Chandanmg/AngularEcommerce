import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SnackbarService } from 'src/app/snackbar';
import { adminOrderModule } from './admin-order-module';
import { adminOrderService } from './admin-order-service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.scss']
})
export class AdminOrderComponent implements OnInit {

  private postsub : Subscription;
  
  posts: adminOrderModule[] = [];

  price =  0;

  

  dataSource: MatTableDataSource<adminOrderModule>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor( private router: Router, private adminorderservice: adminOrderService, private snackbar: SnackbarService) { }

  displayedColumns: string[] = ['sl', 'image', 'name', 'quantity', 'price'];

  ngOnInit() {
    this.getOrderItems();
  }

  // product: any =[]

  private total=0;    
  private value; 

  getOrderItems(){
    this.adminorderservice.getOrderItem();
     this.postsub = this.adminorderservice.getPostUpdateListener()
        .subscribe((posts: adminOrderModule[]) => {
            this.posts = posts;
            this.findsum(this.posts);
            this.dataSource = new MatTableDataSource(this.posts);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        })
        
  }

  // onDelete(id: string){
  //   // console.log(id);
  //   this.userservice.deleteItem(id);
  // }

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

  back(){
    this.router.navigate(['/adminpage'])
  }

  logOut(){
    this.router.navigate(['/']);
    this.snackbar.showMessage('LogOut Successfully....' );
  }


}

