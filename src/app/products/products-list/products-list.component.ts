import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServerConnectionService } from '../../services/server-connection.service';

import { Product } from '../../classes/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];

  constructor(private router: Router,
              private serverConnection: ServerConnectionService) { }

  ngOnInit(): void {
    this.products = this.serverConnection.getAllProducts();
  }

  seeProductDetails(productId: number): void {
    this.router.navigateByUrl('/products/'.concat(String(productId)));
  }

}
