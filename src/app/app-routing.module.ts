import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // make sure path is correct
import { AboutComponent } from './about/about.component'; // make sure path is correct
const routes: Routes = [
  { path: '', component: HomeComponent }, // default route (home page)
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
