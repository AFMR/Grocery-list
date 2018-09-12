import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGroceryComponent } from './app-grocery/app-grocery.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OnlineComponent } from './online/online.component';
import { OthersComponent } from './others/others.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent ,
  },
  {
    path:'list',
    component: AppGroceryComponent,
  },
  {
    path:'online',
    component: OnlineComponent,
  },
  {
    path: 'others',
    component: OthersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
