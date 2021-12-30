import { Routes } from "@angular/router";
import {ProductListComponent} from "./products/ProductsList/product-list.component";
import {ProductDetailComponent} from "./products/ProductDetails/product-detail.component";
import {WelcomeComponent} from "./welcome/welcome.component";

export const AppRoutes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
