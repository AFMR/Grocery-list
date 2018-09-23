import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGroceryComponent } from './app-grocery/app-grocery.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  {
    path: 'home',
    component: LandingPageComponent ,
  },
  {
    path:'shoppingList1/:listName',
    component: AppGroceryComponent
  },
  {
    path:'shoppingList2/:listName',
    component: AppGroceryComponent
  },
  {
    path:'shoppingList3/:listName',
    component: AppGroceryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
