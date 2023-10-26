import {Component, Input} from '@angular/core';
import {Order} from "../../model/order";
import {User} from "../../../Authentication/model/user";
import {Product} from "../../../Management/model/product";
import {MatDialog} from "@angular/material/dialog";
import {
  CancelPurchaseDialogContentComponent
} from "../cancel-purchase-dialog-content/cancel-purchase-dialog-content.component";
import {OrdersService} from "../../services/orders.service";
import {Router} from "@angular/router";
import {ProductsService} from "../../../Management/services/products.service";
import {UsersService} from "../../../Authentication/services/users.service";

@Component({
  selector: 'app-purchase-card-content',
  templateUrl: './purchase-card-content.component.html',
  styleUrls: ['./purchase-card-content.component.css']
})
export class PurchaseCardContentComponent {
  @Input() order: Order = new Order();
  orders="/orders";
  @Input() users: User[] = [];
  @Input() products: Product[] = [];

  constructor(private orderService:OrdersService, private productsService:ProductsService, private usersService:UsersService, public dialog:MatDialog, private router: Router) {
  }

  openDialog(){
    this.dialog.open(CancelPurchaseDialogContentComponent);
  }

  getUser(userId: number): any{
    return this.users.find(user => user.id === userId);
  }

  getProduct(productId: number): any {
    return this.products.find(product => product.id === productId);
  }

  deleteOrder(id: number) {
    this.orderService.delete(id).subscribe(()=> {})
  }

  viewOrderDetails(id: number) {
    this.router.navigate(['/purchases', id]);
  }
}
