import { AbstractControl, ValidationErrors } from '@angular/forms'
export function check_city(cityFromcontrol: AbstractControl): ValidationErrors | null
{
  const v = cityFromcontrol.value
  const accpt_cities=[
    "Howrah",
    "Kolkata"
  ]
 if (accpt_cities.filter((item)=> item == v).length > 0)
 {
   return null;
 }
 else{
   return {'check_city': true, 'msg': `${accpt_cities.toString()} Cities are accpted`};
 }

}
