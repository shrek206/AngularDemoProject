import { Component, output, OutputEmitterRef, signal } from '@angular/core';
import { Product } from '../../../shared/models/products';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  imports: [FormsModule],
  templateUrl: './product-add.html',
  styleUrl: './product-add.css',
})
export class ProductAdd {
  nameproduct = signal("");
  priceProduct = signal<number>(0);
  idProduct = signal<number>(0);

  objectEmittedSignals: OutputEmitterRef<Product> = output();

  sendToParent() {
    const newProducts: Product = {
      Name: this.nameproduct(),
      price: this.priceProduct(),
      id: this.idProduct()
    }
    this.idProduct.set(this.idProduct() + 1);
    this.objectEmittedSignals.emit(newProducts)
  }
}
