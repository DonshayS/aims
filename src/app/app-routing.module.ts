import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AppComponent } from './app.component';






const routes: Routes = [

 {path: 'Login', component: LoginComponent},
 {path: 'Inventory', component: AppComponent},
 { path: 'Login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'Inventory', loadChildren: () => import('./app.module').then(m => m.AppModule) },
  // Other routes...

  
  

];

@NgModule({
  imports: [

    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
