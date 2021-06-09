import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'facts'
})
export class FactsPipe implements PipeTransform {

  transform(args:string[]) : any {

    console.log(args);

    let facts = [];

    for (let key in args) {

      for (const [k, v] of Object.entries(args[key])) {

        if(k==="text"){
          facts.push({
            key: key,
            value: v
          });
        }
      }
    }
    return facts;

  }

}
