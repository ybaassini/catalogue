import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import {
  inject,
  TestBed,
  getTestBed
} from '@angular/core/testing';

// Load the implementations that should be tested
import { CatalogueService } from "./catalogue.service";
import { ProductMock1, ProductMock2, ProductMock4, ProductMock3, ProductMock5, ProductMock6 } from "../mocks/product.mock";

describe(`CatalogueService`, () => {
  let service: CatalogueService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CatalogueService
      ]
    })
    .compileComponents();
  });

  beforeEach(inject([CatalogueService], (CatalogueService) => {
    service = CatalogueService;
  }));

  it(`is defined`, () => {
    expect(service).toBeDefined();
  });

  it('initCatalogue should populate all products', () => {
    let productsMock = [ProductMock1,
                            ProductMock2,
                            ProductMock3,
                            ProductMock4,
                            ProductMock5,
                            ProductMock6]
    service.initCatalogue();
    expect(service.products).toEqual(productsMock);
  });
  
});
