import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { MdInputModule, MdCheckboxModule, MdMenuModule, MdGridListModule, MdSnackBarModule, MdButtonModule, MdRadioModule, MdAutocompleteModule} from '@angular/material';

import { CatalogueComponent } from "./component/catalogue/catalogue.component";
import { UniquePipe } from "./pipe/unique.pipe";
import { WeightPipe } from "./pipe/weight.pipe";
import { PricePipe } from "./pipe/price.pipe";
import { ProductPipe } from "./pipe/product.pipe";
import { FilterPipe } from "./pipe/filter.pipe";

// Application wide Service Providers
const sharedComponents = [CatalogueComponent];

const sharedPipes = [PricePipe, WeightPipe, ProductPipe];
const sharedDirectives = [];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    MdInputModule,
    MdCheckboxModule,
    MdMenuModule,
    MdButtonModule,
    MdRadioModule,
    MdAutocompleteModule,
    NgxPaginationModule
  ],
  declarations: [
    ...sharedComponents,
    ...sharedDirectives,
    ...sharedPipes
],
  providers:[],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    MdInputModule,
    MdCheckboxModule,
    MdRadioModule,
    MdButtonModule,
    MdAutocompleteModule,
    NgxPaginationModule,
    ...sharedComponents,
    ...sharedDirectives,
    ...sharedPipes
  ]
})

export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
