import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from "./ProductsList/product-list.component";
import {ProductDetailComponent} from "./ProductDetails/product-detail.component";
import {ConvertToSpaces} from "../shared/convert-to-spaces.pipe";
import {StarComponent} from "../shared/star.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpaces,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class ProductModule { }
