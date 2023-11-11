import { Component } from '@angular/core';
import { productRepresentation } from '../services/api/products/models/product-representation';
import { ProductService } from '../services/api/products/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {

  product: productRepresentation ={};

  constructor(
    private service: ProductService,
    private router: Router
  ){}

  SaveProduct():void{
   this.service.createProduct(this.product)
   .subscribe(
    {
      next: (result:productRepresentation):void =>{
        this.router.navigate(['products']);
      }
    }
   )
  }
}
