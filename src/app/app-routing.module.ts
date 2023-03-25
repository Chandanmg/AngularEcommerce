import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminOrderComponent } from './screens/admin-order/admin-order.component';
import { AdminPageComponent } from './screens/admin-page/admin-page.component';
import { LoginscreenComponent } from './screens/loginscreen/loginscreen.component';
import { UserCartComponent } from './screens/user-cart/user-cart.component';
import { UserPageComponent } from './screens/user-page/user-page.component';


const routes: Routes = [
  { path: '', component: LoginscreenComponent },
  { path: 'adminpage', component: AdminPageComponent },
  // { path: '', component: AdminPageComponent },
  { path: 'userpage', component: UserPageComponent },
  // { path: '', component: UserPageComponent },,
  { path: 'usercart', component: UserCartComponent },
  // { path: '', component: UserCartComponent }
  { path: 'adminorder', component: AdminOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
