import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function AgeValidators(): ValidatorFn {
    return (control : AbstractControl): ValidationErrors | null => {
        const ageDate = control.value;

        if (!ageDate){
            return null
        }
        const [annee] = ageDate.split("-");
        const anneeInt = parseInt(annee)

        const DateNow = new Date();
        const DateAnnee = DateNow.getFullYear();


        if (DateAnnee - anneeInt < 18){
            return {Minor :"Tu es un MINOR"};
        }
        return null
    }
}

