import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductReviewComponent } from './product-review/product-review.component';

import { MaterialModule } from '../material-module';

const routes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: ':id', component: ProductDetailComponent }

];

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductDetailComponent,
    ProductsListComponent,
    ProductReviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductsModule { }
