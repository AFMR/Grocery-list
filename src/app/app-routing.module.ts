import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGroceryComponent } from './app-grocery/app-grocery.component';


const routes: Routes = [
  {
    path: 'list',
    component: AppGroceryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
