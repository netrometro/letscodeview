import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CardModule, PasswordModule, ButtonModule ],
  declarations: [ AppComponent, LoginPageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
