import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ChatComponent } from './pages/chat/chat.component';
import { MessagesComponent } from './components/messages/messages.component';
import { UsersComponent } from './components/users/users.component';
import { AuthService } from '../app/auth/auth.service';
import { AuthGuard } from '../app/auth/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    ContactsComponent,
    ChatComponent,
    MessagesComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService,
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
