import { ValidatorFn } from "@angular/forms";

export function emailValidator(domains: string[]): ValidatorFn {
    //  [A-Za-z0-9]+@gmail\.(com/bg) 
    return (control) => {
      console.log('Control value:',control.value);
      
      return null;
    };
  }