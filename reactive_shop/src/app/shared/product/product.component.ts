import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../interficies/product.interface';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {

  product = input.required<Product>();

  constructor() { }
}
