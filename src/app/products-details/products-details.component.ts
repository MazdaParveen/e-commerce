import { Component , Input} from '@angular/core';
import { productRepresentation } from '../services/api/products/models/product-representation';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent {

  @Input()
  product:productRepresentation ={};
}
