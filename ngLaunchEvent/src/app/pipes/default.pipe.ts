import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'default'
})
export class DefaultPipe implements PipeTransform {

  transform(value: string): string {
    let image = '';
    if (value) {
      image = value;
    }
    return image;
  }

}
