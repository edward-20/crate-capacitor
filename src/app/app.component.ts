import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Crate';
  isLoggedIn = false;

  private auth = inject(Auth);
  ngOnInit() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) this.isLoggedIn = true
      else this.isLoggedIn = false
    })
  }
}
