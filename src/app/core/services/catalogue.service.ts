import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ProductMock6, ProductMock5, ProductMock4, ProductMock3, ProductMock2, ProductMock1 } from "../mocks/product.mock";
import { Product } from "../models/product.model";
import { Tag } from "../models/tag.model";
import * as _ from 'lodash'; 

@Injectable()
export class CatalogueService {

    public products: BehaviorSubject<Product[]> = new BehaviorSubject(new Array());
    public productDetails: Product;
    public tags: Tag[] = [];

    constructor() {
        this.initCatalogue();
    }

    public initCatalogue() {
        this.products.next([ProductMock1,
                            ProductMock2,
                            ProductMock3,
                            ProductMock4,
                            ProductMock5,
                            ProductMock6]);
        this.getAllTags();
    }

    public getAllTags() {
        this.products.value.forEach((product) => {
            this.tags = this.tags.concat(product.tags);
        }, this)

        this.tags = _.uniqBy(this.tags, 'tagId');
    }

    public searchByProduct(description: string) {
        this.products.next(this.products.value.filter(product => product.description === description));
    }

}
