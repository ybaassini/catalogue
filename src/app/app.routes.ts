import { Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { NoContentComponent } from "./pages/no-content/no-content.component";
import { ProductGuard } from "./core/guards/product.guard";

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'product', canActivate: [ProductGuard], loadChildren: './pages/product/product.module.ts#ProductPageModule' },
  { path: '**',    component: NoContentComponent },
];
