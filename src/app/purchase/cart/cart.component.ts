import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/classes/product';

import { CartService } from '../../services/cart.service';

import { ServerConnectionService } from '../../services/server-connection.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[] = [];
  tests = [1, 2, 3, 4, 5];

  constructor(private cart: CartService,
              private storage: ServerConnectionService) { }

  ngOnInit(): void {
    this.products = this.cart.getCart();
  }

  deleteProduct(index: number): void {

  }

}
