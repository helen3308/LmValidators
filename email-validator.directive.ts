import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, ValidatorFn, FormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[emailValidator][ngModel]',
  providers: [  
    {  
     provide: NG_VALIDATORS,  
     useExisting: EmailValidator,  
     multi: true  
    }  
   ] 
})
export class EmailValidator implements Validator{
  validator: ValidatorFn;
  
  validate(control: AbstractControl): ValidationErrors {
    return this.validator(control);  
  }  

  constructor() {
    this.validator = this.emailValidator();  
   }

   emailValidator(): ValidatorFn {  
    return (c: FormControl) => {  
     let pattern = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;  
     
     let isValid = pattern.test(c.value);
     
     if (isValid) {  
      return null;  
     } else {  
      return {  
        emailValidator: {  
        valid: false  
       }  
      };  
     }  
    }  
  }
}