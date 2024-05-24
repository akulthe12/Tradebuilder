import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public totalItem : number = 0;
  public searchTerm !: string;
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
   
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cart.search.next(this.searchTerm);
  }
}
