import {Component, Input} from '@angular/core';
import {Product} from "../../models/product";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: Product = new Product();
  productDetails="/product-details";

  constructor() {}
}
