import { Component, output, OutputEmitterRef, signal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../shared/models/products';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  nomProduct = signal("");
  prixProduct = signal<number>(0);

  objectEmittedSignal: OutputEmitterRef<Product> = output();

  sendToParent() {
    const newProducts: Product = {
      Name: this.nomProduct(),
      price: this.prixProduct()
    }

    this.objectEmittedSignal.emit(newProducts)
  }
}
