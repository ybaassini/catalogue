import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ProductComponent } from "./product.component";

const routes: Routes = [
  {path: '', component: ProductComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  declarations: [ProductComponent]
})

export class ProductPageModule {
}
