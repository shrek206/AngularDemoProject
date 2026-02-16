import { Component, input } from '@angular/core';
import { Product } from '../../../shared/models/products';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-list-product',
  imports: [CurrencyPipe],
  templateUrl: './list-product.html',
  styleUrl: './list-product.css',
})
export class ListProduct {
  objectFromParentSignal = input<Product[]>();
}
