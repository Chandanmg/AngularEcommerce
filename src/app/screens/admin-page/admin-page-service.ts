import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material";
import { addItemModel } from "./admin-page-model";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";


@Injectable({ providedIn : 'root'})
export class adminService {

    
    public posts: addItemModel[] = [];
    
    private postUpdated = new Subject<addItemModel[]>();


    constructor(public http: HttpClient, private dailog: MatDialog){}

    addItem(itemname: string, price: number, url: string, about: string){
        const add: addItemModel = { itemname: itemname, price: price, url: url, about: about}

        console.log(url);

        this.http.post('http://localhost:3000/admin/additem',add)
        .subscribe((response: any) => {
            if(response){
                // this.snackbar.showMessage("added successfully..");
                this.dailog.closeAll();
                window.location.reload();
            }
        })
    }

    getItem(){
        this.http.get<{message: string, posts: any}>('http://localhost:3000/admin/getAddItem')
        .pipe(map((postdata) => {
            return postdata.posts.map(post => {
                return {
                    name: post.itemname,
                    price: post.price,
                    url: post.url,
                    about: post.about,
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