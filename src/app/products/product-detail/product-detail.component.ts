import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Product } from '../../classes/product';

import { CartService } from '../../services/cart.service';
import { ServerConnectionService } from '../../services/server-connection.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  editting = false;
  isAdmin = true;
  isCreating = false;
  quantities!: number[];
  product!: Product;
  productForm!: FormGroup;

  constructor(private cart: CartService,
              private route: ActivatedRoute,
              private router: Router,
              private serverConnection: ServerConnectionService) { }

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    if (productId === -1) {
      this.isCreating = true;
      this.editting = true;
      this.productForm = new FormGroup({
        name: new FormControl({disabled: false, value: ''}, [Validators.required]),
        stock: new FormControl({disabled: false, value: 1}, [Validators.required, Validators.min(0)]),
        price: new FormControl({disabled: false, value: 1}, [Validators.required, Validators.min(1)]),
        description: new FormControl({disabled: false, value: ''}, [Validators.required]),
      });
    } else {
      this.product = this.serverConnection.getProductById(productId);
      console.log(this.product);
      this.productForm = new FormGroup({
        name: new FormControl({disabled: false, value: this.product.name}, [Validators.required]),
        stock: new FormControl({disabled: false, value: this.product.stock}, [Validators.required, Validators.min(0)]),
        price: new FormControl({disabled: false, value: this.product.price}, [Validators.required, Validators.min(1)]),
        description: new FormControl({disabled: false, value: this.product.description}, [Validators.required]),
        quantityBought: new FormControl({disabled: false, value: 1}, [Validators.required, Validators.min(1),
          Validators.max(this.product.stock)])
      });
      this.initializeQuantities();
    }
  }

  initializeQuantities(): void {
    this.quantities = [];
    for (let i = 0; i < this.productForm.get('stock')?.value; i++) {
      this.quantities.push(i + 1);
    }
  }

  updateProduct(): void {
    const product = new Product(this.productForm.get('name')?.value,
      this.productForm.get('description')?.value, this.productForm.get('stock')?.value, this.productForm.get('price')?.value);
    product.id = this.product.id;
    product.picture = this.product.picture;
    this.serverConnection.updateProduct(product, this.product.id);
    this.ngOnInit();
  }

  deleteProduct(): void {
    this.serverConnection.deleteProduct(this.product.id);
    this.router.navigateByUrl('');
  }

  createProduct(): void {
    const product = new Product(this.productForm.get('name')?.value,
      this.productForm.get('description')?.value, this.productForm.get('stock')?.value, this.productForm.get('price')?.value);
    product.picture = '../../assets/xbox.jpg';
    this.serverConnection.createProduct(product);
    this.router.navigateByUrl('');
  }

  insertIntoCart(): void {
    const stock = this.productForm.get('quantityBought')?.value;
    this.cart.insertProduct(this.product, stock);
    const product = new Product(this.productForm.get('name')?.value,
      this.productForm.get('description')?.value, (this.productForm.get('stock')?.value - stock), this.productForm.get('price')?.value);
    product.picture = this.product.picture;
    product.id = this.product.id;
    this.serverConnection.updateProduct(product, this.product.id);
    this.ngOnInit();
  }

}
