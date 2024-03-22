import { ValidatorFn } from "@angular/forms";

export function emailValidator(domains: string[]): ValidatorFn {
    //  [A-Za-z0-9]+@gmail\.(com/bg)
    const domainString = domains.join('|');
    const regExp = new RegExp(`[A-Za-z0-9]+@gmail\.(${domainString})`);
    
    return (control) => {
      const isEmailValid = control.value === "" || regExp.test(control.value);
      console.log('test regex', isEmailValid);
      
      console.log('Control value:',control.value);
      
      return isEmailValid ? null : {emailValidator: true}
    };
  }