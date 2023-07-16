import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListaPerComponent } from './home/lista-per/lista-per.component';
import { PersComponent } from './home/lista-per/pers/pers.component';

const routes: Routes = [
  {path:"register", component: RegisterComponent},
  {path:"login", component: LoginComponent},
  {path:"", redirectTo: "home", pathMatch: "full"},
  {path:"home", component: HomeComponent},
  {path:"lista-personajes", component: ListaPerComponent},
  {path:"lista-personajes/personaje", component: PersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
