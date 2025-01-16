import { Component, model } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthForm } from '../auth-form';

@Component({
  selector: 'app-sign-in',
  imports: [RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
}
