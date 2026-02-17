import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { AgeValidators } from '../../shared/validators/ageValidators';

@Component({
  selector: 'app-exo9',
  imports: [ReactiveFormsModule],
  templateUrl: './exo9.html',
  styleUrl: './exo9.css',
})
export class Exo9 {
  private readonly _fb: FormBuilder = inject(FormBuilder);

  ageForm : FormGroup = this._fb.group({
    age: [null, [Validators.required, AgeValidators()]]
  })

  onSubmite() {
    if (this.ageForm.valid)
     alert(`✅ Formulaire valide !`);
    }
}
