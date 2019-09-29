import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/components/home/home.component';
import {AboutComponent} from '../app/components/about/about.component';
import {ServicesComponent} from '../app/components/services/services.component';
import {ContactComponent} from '../app/components/contact/contact.component';
import {PortfolioComponent} from '../app/components/portfolio/portfolio.component';

const routes: Routes = [
   {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'portfolio', component: PortfolioComponent},
   { path: '',     component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
