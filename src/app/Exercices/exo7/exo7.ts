import { Component } from '@angular/core';
import { AddProduct } from './add-product/add-product';
import { ListProduct } from './list-product/list-product';
import { Product } from '../../shared/models/products';

@Component({
  selector: 'app-exo7',
  imports: [AddProduct,ListProduct],
  templateUrl: './exo7.html',
  styleUrl: './exo7.css',
})
export class Exo7 {

objectFromChild: Product[] = [];

// receiveValue($event: Product) {
//   this.objectFromChild.push($event);
// }
 }
       