import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], term: string): any {
    console.log(term);
    if (term!="") {
      return list.filter((item) => {
        if (item.category) {

         return item.category.toLowerCase().includes(term.toLowerCase())
        }
      })
    }
    else
    {
      return list;
      }


  }

}
