import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  
  public products : any = [];
  public grandTotal !: number;
  constructor(private cart : CartService) { }

  ngOnInit(): void {
    this.cart.getProducts()
    .subscribe((res:any)=>{
      this.products = res;
      this.grandTotal = this.cart.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cart.removeCartItem(item);
  }
  emptycart(){
    this.cart.removeAllCart();
  }

}
