import { Component, model } from '@angular/core';
import { AuthForm } from '../auth-form';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  authForm = model.required<AuthForm>()

  changeForm(newForm: AuthForm) {
    this.authForm.update(newForm => newForm);
  }
}
