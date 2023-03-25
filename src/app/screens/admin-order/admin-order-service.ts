import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { adminOrderModule } from "./admin-order-module";


@Injectable({ providedIn : 'root'})
export class adminOrderService {

    
    public posts: adminOrderModule[] = [];
    
    private postUpdated = new Subject<adminOrderModule[]>();


    constructor(public http: HttpClient, private dailog: MatDialog){}

    addOrder(posts: any[]){
        // console.log(posts)
        console.log(posts.length)
        // const add: adminOrder = { posts}

        // console.log(url);

        for (let i = 0; i < posts.length; i++) {

            this.http.post('http://localhost:3000/admin/order',posts[i])
            .subscribe((response: any) => {
                if(response){
                    // this.snackbar.showMessage("added successfully..");
                    // this.dailog.closeAll();
                    // window.location.reload();
                }
        })
            
        }

    }

    getOrderItem(){
        this.http.get<{message: string, posts: any}>('http://localhost:3000/admin/getOrderItem')
        .pipe(map((postdata) => {
            return postdata.posts.map(post => {
                return {
                    name: post.itemname,
                    price: post.price,
                    url: post.url,
                }
            })
        }))
        .subscribe(post => {
            // console.log(post);
            this.posts = post,
            this.postUpdated.next([...this.posts]);
        })
    }

    getPostUpdateListener(){
        return this.postUpdated.asObservable();
    }

    
}