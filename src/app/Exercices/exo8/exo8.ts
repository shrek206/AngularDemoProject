import { Component } from '@angular/core';
import { ProductAdd } from "./product-add/product-add";
import { Product } from '../../shared/models/products';
import { ProductList } from "./product-list/product-list";

@Component({
  selector: 'app-exo8',
  imports: [ProductAdd, ProductList],
  templateUrl: './exo8.html',
  styleUrl: './exo8.css',
})
export class Exo8 {
  objectFromChilds: Product[] = [];  
}
