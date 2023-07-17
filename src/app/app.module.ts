import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './home/nav/nav.component';
import { ListaPerComponent } from './home/lista-per/lista-per.component';
import { PersComponent } from './home/lista-per/pers/pers.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './home/about/about.component';
import { EditarComponent } from './home/lista-per/editar/editar.component';
import { CrearComponent } from './home/lista-per/crear/crear.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    ListaPerComponent,
    PersComponent,
    AboutComponent,
    EditarComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
