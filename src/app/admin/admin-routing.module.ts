import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin.component';

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: 'dashboard',
        component: AdminComponent
      },
      {
        path: '',
        component: LoginComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
