import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployesComponent } from './employes/employes.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { UserComponent } from './user/user.component';
import { DirectAccessGuard } from './guard/direct-access.guard';

const routes: Routes = [
  {
      path: 'login', component: UserComponent,
      children: [{ path: '', component: SigninComponent }]
  },
  {
    path: 'register', component: UserComponent,
    children: [{ path: '', component: SignupComponent }]
  },
  { path: 'employes', component: EmployesComponent, canActivate: [DirectAccessGuard] },

  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
