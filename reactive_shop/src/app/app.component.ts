import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { BasketService } from './services/basket.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, MatBadgeModule, RouterLink, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'reactive_shop';

  // Observable para la cantidad de objetos en la cesta
  basketAmountItems$!: Observable<number>;

  constructor(private basket: BasketService) {}

  ngOnInit(): void {
    // Los observable se inicializan en el "ngOnInit"
    this.basketAmountItems$ = this.basket.getAmountItems();
  }



}
