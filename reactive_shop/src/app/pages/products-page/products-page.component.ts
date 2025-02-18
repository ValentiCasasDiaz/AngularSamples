import { Component, OnInit } from '@angular/core';
import { ProductComponent } from "../../shared/product/product.component";
import { Product } from '../../interficies/product.interface';
import { BasketItem } from '../../interficies/basket_item.interface';
import { BasketService } from '../../services/basket.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [ProductComponent, MatButtonModule, MatIconModule, AsyncPipe, MatProgressSpinnerModule],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent implements OnInit {

  products$!: Observable<Product[]>;

  constructor(
    private basket: BasketService,
    private product: ProductService
  ) {}

  ngOnInit(): void {
    this.products$ = this.product.getProducts();
  }

  addToBasket(product: Product) {
    
    const basketItem: BasketItem = {
      product: product,
      amount: 1
    };

    this.basket.addItem(basketItem);
  }


}
