import {  Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { SnackbarService } from 'src/app/snackbar';
import { adminService } from '../admin-page/admin-page-service';
import { FileHandle } from './file-handler';

@Component({
  selector: 'app-add-item-dailog',
  templateUrl: './add-item-dailog.component.html',
  styleUrls: ['./add-item-dailog.component.scss']
})
export class AddItemDailogComponent implements OnInit {

  constructor(private adminservice: adminService, private snackbar: SnackbarService ) { }


  ngOnInit() {
  }



  addItem(form: NgForm){
      if(form.invalid){
          return;
      }
      // console.log(form.value.url)
      this.adminservice.addItem(form.value.itemname, form.value.price, form.value.url, form.value.about);
      this.snackbar.showMessage('Added Successfully....' );
  }


}
