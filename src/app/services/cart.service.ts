import { Injectable } from '@angular/core';

import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Product[] = [];

  constructor() { }

  insertProduct(newproduct: Product, stock: number): void {
    newproduct.stock = stock;
    this.products.push(newproduct);
  }

  getCart(): Product[] {
    return this.products;
  }
}
