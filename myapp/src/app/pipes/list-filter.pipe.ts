import { Pipe, PipeTransform } from '@angular/core';
import { Iproducts } from '../shared/model/product';

@Pipe({
  name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {

  // transform(value: any, filterText: string): any {
  //   if (filterText === "")
  //   {return value;}
  //   else{
  //    return value ? value.filter(item => item.product.toLowerCase() == filterText.toLowerCase()) : [];
  //   }
  //   //return null;
  // }

  transform(items: Iproducts[], value: string) {
    if (!items) return [];
    if (!value) return  items;
    if (value == '' || value == null) return [];
    return items.filter( (e:Iproducts) => e.product.toLowerCase().indexOf(value) > -1 );
  }
}
