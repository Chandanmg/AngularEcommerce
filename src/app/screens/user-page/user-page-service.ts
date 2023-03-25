import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { userCartModel } from "./user-page-model";


@Injectable({ providedIn : 'root'})
export class userService {

    // totalprice = 0;
    
    public posts: userCartModel[] = [];
    
    private postUpdated = new Subject<userCartModel[]>();


    constructor(public http: HttpClient, private dailog: MatDialog){}

    addtocart(name: string, price: number, url: string){
        const add: userCartModel = { name: name, price: price, url: url}

        console.log(url);

        this.http.post('http://localhost:3000/user/cart',add)
        .subscribe((response: any) => {
            if(response){
                // this.snackbar.showMessage("added successfully..");
                this.dailog.closeAll();
                window.location.reload();
            }
        })
    }

    getCartItem(){
        this.http.get<{message: string, posts: any}>('http://localhost:3000/user/getcart')
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
            // this.totalprice = post.price;
            // console.log(this.totalprice);
            this.posts = post,
            this.postUpdated.next([...this.posts]);
        })
    }

    getPostUpdateListener(){
        return this.postUpdated.asObservable();
    }

    deleteItem(id: string){
        this.http.delete(`http://localhost:3000/delete/cart/`+ id)
        .subscribe(()=> {
            const updateposts = this.posts.filter(post => post.name != id);
            this.posts = updateposts;
            this.postUpdated.next([...this.posts]);
            window.location.reload();
        })
    }

    deleteAllItem(){
        this.http.delete(`http://localhost:3000/delete/cart/`)
        .subscribe(()=> {
            // const updateposts = this.posts.filter(post => post.name != id);
            // this.posts = updateposts;
            // this.postUpdated.next([...this.posts]);
            window.location.reload();
        })
    }
}