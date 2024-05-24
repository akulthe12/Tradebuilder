import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
// import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './shared/filter.pipe';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    FooterComponent,
    FilterPipe,
    CartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
