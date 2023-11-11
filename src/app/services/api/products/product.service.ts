import {  Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { productRepresentation } from './models/product-representation';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl : string = 'https://fakestoreapi.com/products?limit=5';

  constructor( 
      private  http: HttpClient
  ) { }

  getAllProductsWithLimit( limit : number = 5): Observable <productRepresentation[]> {
    const productsUrl : string= this.baseUrl + 'products?limit='+5;
    // const productsUrl : string = '${this.baseUrl}products?limit=${limit}';
   return this.http.get<productRepresentation[]>(productsUrl);
   
}
createProduct(product: productRepresentation):Observable<productRepresentation>{
  const productsUrl : string= this.baseUrl + product;

  // const productsUrl : string = '${this.baseUrl}products';
   return this.http.post<productRepresentation>(productsUrl, product);
}


  }

 


