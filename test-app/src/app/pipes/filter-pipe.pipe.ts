import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../components/pages/menu/menu.interface';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(products: Product[], term: string): any {
    console.log(products , term)
    return products.filter((product) => product.title.toLowerCase().includes(term.toLowerCase()));
  }

}
