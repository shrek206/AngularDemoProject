import { Injectable } from "@angular/core";
import { Product } from "../../shared/models/products";

@Injectable({
    providedIn : 'root',
})
export class productService {
    tabProduct : Product[] = [];

    addInTableau(Product : Product) {
        this.tabProduct.push(Product);
    }
    getProducts() : Product[]{
        return [...this.tabProduct]
    }
}