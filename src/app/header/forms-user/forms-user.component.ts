// Angular
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-forms-user',
  templateUrl: './forms-user.component.html',
  styleUrls: ['./forms-user.component.scss']
})
export class FormsUserComponent {
  userPhone: FormControl = new FormControl('', [
    Validators.pattern('[0-9]{10}'),
  ])
  formLogAndPassUser: FormGroup = new FormGroup({
    userLogin: new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{5,}$'),
      Validators.minLength(5),
    ]),
    userPassword: new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{7,}$'),
      Validators.minLength(7),
    ])
  });
  userDate: FormGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern('^([А-ЯЁ][а-я]*((\\s[а-яё])?[а-яё]*)*)$'),
      Validators.minLength(2),
    ]),
    secondName: new FormControl('', [
      Validators.required,
      Validators.pattern('^([А-ЯЁ][а-я]*((\\s[а-яё])?[а-яё]*)*)$'),
      Validators.minLength(2),
    ]),
    patronymicName: new FormControl('', [
      Validators.required,
      Validators.pattern('^([А-ЯЁ][а-я]*((\\s[а-яё])?[а-яё]*)*)$'),
      Validators.minLength(2),
    ])
  });
}
