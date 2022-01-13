import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goHomePage(): void {
    this.router.navigateByUrl('');
  }

  createNewProduct(): void {
    this.router.navigateByUrl('products/'.concat(String(-1)));
  }

  cart(): void {
    this.router.navigateByUrl('cart');
  }

}
