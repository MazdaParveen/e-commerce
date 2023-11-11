import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';
import { productRepresentation } from '../services/api/products/models/product-representation';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: productRepresentation[] = [];

   constructor(
    private service: ProductService
   )
   { }


  ngOnInit(): void {
 
  // const product: productRepresentation = {
  //   title: 'My product',
  //   description: 'Product description',
  //   price: 12,
  //   category: 'Any category',
  //   image: 'http://some-imge.jpg',
    
    
  // }
    
  this.service.getAllProductsWithLimit()
  .subscribe( {
    next : (result: productRepresentation[]): void => {
      // console.log(result);
      this.products = result;
    }

    // error: (error: HttpErrorResponse): void =>{
    
    //   if (error.error instanceof ErrorEvent){
    //     console.error('An error occurred:',error.error.message);
    //   }else{
    //     console.error('Server returned status code${error.status}, error message: ${error.message}');
    //   }
      
    // }
  
  });
}
  
}
