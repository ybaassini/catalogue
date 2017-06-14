import { Pipe, PipeTransform } from '@angular/core';
import { Product } from "../../core/models/product.model";
import { Tag } from "../../core/models/tag.model";

@Pipe({
  name: 'product',
  pure: false
})

export class ProductPipe implements PipeTransform {
    transform(value: Product[], tags: any[], sort: any): any{
        if (tags.some((tag) => tag.checked)) {
            let valueFiltered = [];
            let tagsSelected = tags.filter((tag) =>  {
                return tag.checked;
            });
            tagsSelected.forEach((tagSelected) => {
                let products = value.filter((product) => {
                    return product.tags.some(tag => tag.tagId == tagSelected.tagId)
                })
                valueFiltered = valueFiltered.concat(products);
            })
            value = valueFiltered;
        }
        
        if (sort == 'price') {
            value.sort((a: Product, b: Product) => {
                return a.price.amount - b.price.amount;
            });
        } else if (sort == 'weight') {
            value.sort((a: Product, b: Product) => {
                    return Math.round(a.weight) - Math.round(b.weight);
            });
        } 
        return value;
    }
}
