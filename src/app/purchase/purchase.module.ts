import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './cart/cart.component';

import { MaterialModule } from '../material-module';

const routes: Routes = [
  { path: '', component: CartComponent }

];

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class PurchaseModule { }
