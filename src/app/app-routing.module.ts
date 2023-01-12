import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { EyeglassPageComponent } from './pages/eyeglass-page/eyeglass-page.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "eyeglass", component: EyeglassPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [HomePageComponent, EyeglassPageComponent];
