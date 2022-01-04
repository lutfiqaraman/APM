import { NgModule } from '@angular/core';
import {ProductListComponent} from "./ProductsList/product-list.component";
import {ProductDetailComponent} from "./ProductDetails/product-detail.component";
import {ConvertToSpaces} from "../shared/convert-to-spaces.pipe";
import {RouterModule} from "@angular/router";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpaces
  ],
  imports: [
    RouterModule,
    SharedModule
  ]
})
export class ProductModule { }
