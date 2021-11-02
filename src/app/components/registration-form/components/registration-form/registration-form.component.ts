import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { RegExInEmail } from "../../constants/registration-form";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent {
  registrationForm: FormGroup = new FormGroup({

    login: new FormControl('', [
      Validators.required,
      Validators.pattern(''),
      Validators.minLength(5),
      Validators.maxLength(16),
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.pattern(''),
      Validators.minLength(8),
      Validators.maxLength(16),
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.pattern(RegExInEmail),
      Validators.email,
    ])
  })
}
