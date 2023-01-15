import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { EyeglassPageComponent } from './pages/eyeglass-page/eyeglass-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SignupPageComponent } from "./pages/signup-page/signup-page.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "eyeglass", component: EyeglassPageComponent},
  { path: "contact", component: ContactPageComponent},
  { path: "signup", component: SignupPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [HomePageComponent, EyeglassPageComponent, ContactPageComponent, SignupPageComponent];
