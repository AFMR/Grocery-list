import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGroceryComponent } from './app-grocery/app-grocery.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent ,
  }
  {
    path:'list',
    component: AppGroceryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
