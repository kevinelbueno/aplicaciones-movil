import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductivityPage } from './productivity.page';

const routes: Routes = [
  {
    path: '',
    component: ProductivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductivityPageRoutingModule {}
