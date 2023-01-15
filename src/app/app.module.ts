import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { EyeglassPageComponent } from './pages/eyeglass-page/eyeglass-page.component';
import { HomePageCardComponent } from './components/home-page-card/home-page-card.component';
import { EyeglassPageCardComponent } from './components/eyeglass-page-card/eyeglass-page-card.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    FooterComponent,
    EyeglassPageComponent,
    HomePageCardComponent,
    EyeglassPageCardComponent,
    ContactPageComponent,
    SignupPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
