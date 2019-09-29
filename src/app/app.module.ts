import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppService } from './app.service';
import { MenuPageComponent } from './menu-page/menu-page.component';

import { routes } from './app.routes';

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes), 
    BrowserModule, 
    FormsModule, 
    CardModule, 
    PasswordModule, 
    ButtonModule, 
    RouterModule,
    MenuModule,
    MenubarModule
 ],
  declarations: [ AppComponent, LoginPageComponent, MenuPageComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AppService]
})
export class AppModule { }
