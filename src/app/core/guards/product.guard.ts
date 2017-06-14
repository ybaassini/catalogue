import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { CatalogueService } from "../services/catalogue.service";

@Injectable()
export class ProductGuard implements CanActivate {

  constructor(public catalogueService: CatalogueService, private router: Router) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.catalogueService.productDetails) {
        return true;
    } else {
        this.router.navigate(['home']);
    }
  }

}
