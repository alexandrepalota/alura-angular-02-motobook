import { AbstractControl } from "@angular/forms";

export function lowerCaseValidator(control: AbstractControl) {
  const value = control.value as string
  if (value !== value.toLowerCase() || value.includes(" ")) {
    return { lowerCase: true }
  } else {
    return null
  }

}
