import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {

  transform(value: string, args: 'firstName' | 'lastName' = 'firstName'): unknown {
    if(!value)
      return value;

    if(args === 'firstName') {
      return value.split(' ')[0];
    }

    return value.split(' ')[1]
  }
}
