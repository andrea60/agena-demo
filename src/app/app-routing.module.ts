import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'shop', loadChildren:() => import('./shop/shop.module').then(m => m.ShopModule)},
  { path:'', pathMatch:'full', redirectTo:'/shop'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
