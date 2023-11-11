import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import { FormsModule } from '@angular/forms';
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { NewProductComponent } from './new-product/new-product.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstCompComponent,
    MessageDetailComponent,
    MenuComponent,
    AboutComponent,
    ProductsComponent,
    ProductsDetailsComponent,
    NewProductComponent,
   
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    
    
  ],
  providers: [MyFirstCompComponent,
      HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
