import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';
import { productRepresentation } from '../services/api/products/models/product-representation';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  //  constructor(
  //   private service: ProductService
  //  )
  //  { }


  // ngOnInit(): void {
 
  // const product: productRepresentation = {
  //   title: 'My product',
  //   description: 'Product description',
  //   price: 12,
  //   category: 'Any category',
  //   image: 'http://some-imge.jpg',
    
    
  // }
    
  // this.service.createProduct(product)
  // .subscribe( {
  //   next : (result: productRepresentation): void => {
  //     console.log(result);
  //   },

  //   error: (error: HttpErrorResponse): void =>{
    
  //     if (error.error instanceof ErrorEvent){
  //       console.error('An error occurred:',error.error.message);
  //     }else{
  //       console.error('Server returned status code${error.status}, error message: ${error.message}');
  //     }
      
  //   }
  // })
  // }

 
}
