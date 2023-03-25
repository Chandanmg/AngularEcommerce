import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatDialogModule, MatExpansionModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSnackBarModule, MatSortModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginscreenComponent } from './screens/loginscreen/loginscreen.component';
import { AdminLoginDailogComponent } from './screens/admin-login-dailog/admin-login-dailog.component';
import { AdminPageComponent } from './screens/admin-page/admin-page.component';
import { AddItemDailogComponent } from './screens/add-item-dailog/add-item-dailog.component';
import { HttpClientModule } from '@angular/common/http';
import { UserPageComponent } from './screens/user-page/user-page.component';
import { UserCartComponent } from './screens/user-cart/user-cart.component';
// import { CheckoutdailogComponent } from './screens/checkoutdailog/checkoutdailog.component';
import { AdminOrderComponent } from './screens/admin-order/admin-order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginscreenComponent,
    AdminLoginDailogComponent,
    AdminPageComponent,
    AddItemDailogComponent,
    UserPageComponent,
    UserCartComponent,
    // CheckoutdailogComponent,
    AdminOrderComponent,
    
  ],
  entryComponents: [AdminLoginDailogComponent, AddItemDailogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
