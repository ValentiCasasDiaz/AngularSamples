import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../services/basket.service';
import { Observable } from 'rxjs';
import { BasketItem } from '../../interficies/basket_item.interface';
import { AsyncPipe } from '@angular/common';
import { ProductComponent } from '../../shared/product/product.component';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-basket-page',
  standalone: true,
  imports: [
    AsyncPipe,
    ProductComponent,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './basket-page.component.html',
  styleUrl: './basket-page.component.css',
})
export class BasketPageComponent implements OnInit {
  basketItems$!: Observable<BasketItem[]>;

  constructor(private basket: BasketService, private router: Router) {}

  ngOnInit(): void {
    this.basketItems$ = this.basket.getItems();
  }

  returnToProducts() {
    this.router.navigateByUrl('products');
  }
}
