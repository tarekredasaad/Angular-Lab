import { AbstractControl, FormControl } from "@angular/forms";


export function ForbiddenName(forbiddenName:RegExp){
  return (control:AbstractControl)=>{
    const forbidden = forbiddenName.test(control.value);
    return forbidden ? {'forbiddenName':{value:control.value}}:null;
  }
}
