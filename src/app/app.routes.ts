import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search/search.component';
import { AddComponent } from './add/add/add.component';
import { RecentActivityComponent } from './recent-activity/recent-activity/recent-activity.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { AuthComponent } from './auth/auth/auth.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent, title: 'Home'},
  {path: 'search', component: SearchComponent, title: 'Search'},
  {path: 'add', component: AddComponent, title: 'Add Review'},
  {path: 'recent-activity', component: RecentActivityComponent, title: 'Recent Activity'},
  {path: 'profile', component: ProfileComponent, title: 'Profile'},

  {path: 'auth', component: AuthComponent, title: 'Auth', children: [
    {path: 'sign-in', component: SignInComponent, title: 'Sign In'},
    {path: 'sign-up', component: SignUpComponent, title: 'Sign Up'},
    {path: 'forgot-password', component: ForgotPasswordComponent, title: 'Forgot Password'},
  ]},
];