import {Injectable} from "@angular/core";
import {IProduct} from "../Models/product";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private productUrl = 'api/products/products.json';

  constructor(private http: HttpClient) {}

  getProducts() : Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(),
      catchError(ProductService.handleError)
    );
  }

  private static handleError(err: HttpErrorResponse) {
    let errorMsg: string;

    if (err.error instanceof ErrorEvent) {
      errorMsg = `An Error occurred: ${err.error.message}`;
    } else {
      errorMsg = `Server returned code: ${err.status}, error message is ${err.message}`;
    }
    return throwError(errorMsg);
  }
}
