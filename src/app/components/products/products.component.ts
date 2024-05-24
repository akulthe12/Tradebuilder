import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public productList: any;
  public filterCategory: any
  searchKey: string = "";
  rangeValue: number = 0;
  starRating = 0;
  minPrice: number = 0;
  maxPrice: number = 0;

  selectedRatings: number[] = [];
  prices: number[] = [50, 500, 1000, 10000, 100000, 200000, 300000, 400000];
  constructor(private api: ApiService, private cart: CartService) {

  }
  ngOnInit(): void {
    this.getDataofProduct();
  }

  getDataofProduct() {
    this.api.getProduct()
      .subscribe(res => {
        this.productList = res;
        this.filterCategory = res;
        this.productList.forEach((a: any) => {
          if (a.category === "women's clothing" || a.category === "men's clothing") {
            a.category = "fashion"
          }
          Object.assign(a, { quantity: 1, total: a.price });
        });
        console.log(this.productList);
      });

    this.cart.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  addtocart(item: any) {
    this.cart.addtoCart(item);
  }

  filterByName() {
    this.applyFilters();
  }

  filterByPrice() {
    this.applyFilters();
  }

  filter(category: string) {
    this.filterCategory = this.productList
      .filter((a: any) => {
        if (a.category == category || category == '') {
          return a;
        }
      })
  }
  clearRatingFilter() {
    this.selectedRatings = [];
    this.applyFilters();
  }
  filterByRating(rating: number, event: any) {
    if (event.target.checked) {
      this.selectedRatings.push(rating);
    } else {
      const index = this.selectedRatings.indexOf(rating);
      if (index !== -1) {
        this.selectedRatings.splice(index, 1);
      }
    }
    this.applyFilters();
  }

  applyFilters() {
    this.filterCategory = this.productList.filter((item: any) => {

      if (this.selectedRatings.length > 0) {
        return this.selectedRatings.includes(Math.floor(item.rating.rate));
      } else {
        return true; // Return true if no ratings are selected
      }
    });
  }


}