import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';

export const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'menu', component: MenuPageComponent }
];