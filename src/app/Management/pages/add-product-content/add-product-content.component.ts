import { Component } from '@angular/core';
import {OrdersService} from "../../../Shopping/services/orders.service";
import {Router} from "@angular/router";
import {Product} from "../../model/product";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-add-product-content',
  templateUrl: './add-product-content.component.html',
  styleUrls: ['./add-product-content.component.css']
})
export class AddProductContentComponent {
  productForm: Product;
  constructor(private productsService: ProductsService, private router: Router) {
    this.productForm={
      id: 0,
      name: '',
      description: '',
      distance: '',
      depth: '',
      weather: '',
      groundType: '',
      season: '',
      unitPrice: 0,
      imageUrl: ''
    };
  }

  onSubmit() {
    this.productsService.create(this.productForm).subscribe(() => {
      this.router.navigate(['/products']);
      location.reload();
    });
  }
}