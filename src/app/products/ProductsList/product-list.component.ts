import {Component, OnDestroy, OnInit} from "@angular/core";
import { IProduct } from "../Models/product";
import { ProductService } from "../Services/product.service";
import {Subscription} from "rxjs";

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy{

  pageTitle   = 'Product List';
  imageWidth  = 50;
  imageMargin = 2;
  showImage   = false;
  sub!: Subscription;

  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];

  private errorMsg: string = '';
  private _listFilter : string = '';
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.productFilter(value);
  }

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMsg = err
    });
  }

  toggleImage() : void {
    this.showImage = !this.showImage;
  }

  productFilter(filterBy: string) : IProduct[] {
    filterBy = filterBy.toLowerCase();

    return this.products.filter((product: IProduct) =>
      product.productName.toLowerCase().includes(filterBy));
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
