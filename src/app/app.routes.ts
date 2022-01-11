import { Routes } from "@angular/router";
import {ProductListComponent} from "./products/ProductsList/product-list.component";
import {ProductDetailComponent} from "./products/ProductDetails/product-detail.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {ProductDetailsGuard} from "./products/ProductDetailsGuard/product-details.guard";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";

export const AppRoutes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id',
    canActivate: [ ProductDetailsGuard ],
    component: ProductDetailComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '404', component: PagenotfoundComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];
