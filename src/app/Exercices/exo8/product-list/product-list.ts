import { Component, input } from '@angular/core';
import { Product } from '../../../shared/models/products';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CurrencyPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
   objectFromParentSignals = input<Product[]>();
}
