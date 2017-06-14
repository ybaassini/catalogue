import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { Product } from "../../../core/models/product.model";
import { CatalogueService } from "../../../core/services/catalogue.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app-catalogue',
  styleUrls: ['./catalogue.component.scss'],
  templateUrl: 'catalogue.component.html'
})

export class CatalogueComponent implements OnInit {
  public products: Product[];
  public searchForm: FormGroup;
  public searchOptions: Product[];
  public filteredOptions: Observable<Product[]>;

  constructor(public catalogueService: CatalogueService,
              public fb: FormBuilder,
              public router: Router) {}

  public ngOnInit() {
    this.catalogueService.initCatalogue();
    this.searchForm = this.buildSearchForm();

    this.filteredOptions = this.searchForm.valueChanges
         .startWith(null)
         .map(val => val ? this.filter(val) : this.catalogueService.products.value);
  }

  public buildSearchForm() {
      return this.fb.group({
        search: ['']
      });
  }

  public filter(val): Product[] {
    if (val.search)
      return this.catalogueService.products.value.filter(s => new RegExp(`^${val.search}`, 'gi').test(s.description)); 
    else {
      this.catalogueService.initCatalogue();
      return this.catalogueService.products.value;
    }
   }

  public search() {
    let description: string;
    description = this.searchForm.get('search').value;
    if (description) {
      this.catalogueService.searchByProduct(description); 
    } else {
      this.catalogueService.initCatalogue();
    }
  }

  public more(product: Product) {
    this.catalogueService.productDetails = product;
    this.router.navigate(['product']);
  }

}
