import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DepositosComponent } from './pages/depositos/depositos.component';
import { LoginComponent } from './pages/login/login.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

const routes: Routes = [
  {
    path : '', redirectTo: 'login', pathMatch : 'full'
  },
  {
    path: 'dashboard', component: DashboardComponent, canActivate :[AuthGuard]
  },
  {
    path: 'depositos', component: DepositosComponent, canActivate :[AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'sidebar', component: SidebarComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'login'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
