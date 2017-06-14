import {
  Component,
  OnInit
} from '@angular/core';

import { Product } from "../../core/models/product.model";
import { CatalogueService } from "../../core/services/catalogue.service";

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  selector: 'product',  // <home></home>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [ './product.component.scss' ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  public product: Product;
  constructor(public catalogueService: CatalogueService) {}

  public ngOnInit() {
    this.product = this.catalogueService.productDetails;
  }

}
