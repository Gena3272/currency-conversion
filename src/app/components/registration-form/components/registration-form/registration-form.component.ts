// Angular
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

// Constants
import { RegExInEmail, RegExInLogin, RegExInPassword } from "../../constants/registration-form";

// Services
import { RegistrationFormService } from "../../services/registration-form.service";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private registrationFormService: RegistrationFormService) {}

  ngOnInit(): void {
    this.setRegistrationForm();
  }

  registrationAccount(): void {
    this.registrationFormService.isValidForm = this.registrationForm.valid;
  }

  private setRegistrationForm(): void {
    this.registrationForm = new FormGroup({
      login: new FormControl('', [
        Validators.required,
        Validators.pattern(RegExInLogin),
        Validators.minLength(5),
        Validators.maxLength(16),
      ]),

      password: new FormControl('', [
        Validators.required,
        Validators.pattern(RegExInPassword),
        Validators.minLength(8),
        Validators.maxLength(16),
      ]),

      email: new FormControl('', [
        Validators.required,
        Validators.pattern(RegExInEmail),
        Validators.email,
      ]),
    });
  }
}
