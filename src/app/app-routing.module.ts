import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AppComponent } from './app.component';







const routes: Routes = [

 {path: 'Login', component: LoginComponent},
 {path: 'Inventory', component: AppComponent},
<<<<<<< HEAD

  
  

=======
>>>>>>> e5de3f6627d218aa1a71d1b6dc5f71d9b3229448
];

@NgModule({
  imports: [

    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
