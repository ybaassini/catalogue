import { Tag } from "./tag.model";
import { ProductPrice } from "./productPrice.model";
import { ProductCategory } from "./productCategory.model";

export class Product {

  public productId: number;
  public url: string[];
  public description: string;
  public tags: Tag[];
  public weight: number;
  public price: ProductPrice;
  public category: ProductCategory[];
}