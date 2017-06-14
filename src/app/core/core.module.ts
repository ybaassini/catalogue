// Application wide Service Providers
import { CatalogueService } from "./services/catalogue.service";
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core";
import { HttpModule } from "@angular/http";
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductGuard } from "./guards/product.guard";

const DATA_SERVICES = [CatalogueService];
const GUARDS = [ProductGuard];
const LAYOUT_SERVICES = [];
const SERVICE_PROVIDERS = [...DATA_SERVICES, ...GUARDS, ...LAYOUT_SERVICES];

@NgModule({
  imports: [
    HttpModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule
  ],
  declarations: [],
  providers: [SERVICE_PROVIDERS],
  exports: [
    BrowserAnimationsModule, TranslateModule
  ]
})

export class CoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule
    };
  }

  // https://angular.io/styleguide#04-12
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

}
