import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentServiceComponent } from './content-service/content-service.component';
import { TestomonialComponent } from './testomonial/testomonial.component';
import { ClientsComponent } from './clients/clients.component';

import { PricesComponent } from './prices/prices.component';
import { HeaderComponent } from './header/header.component';




/* this how we creat routing for each view to display */
const routes: Routes = [
  /* the first one is the defual rout when we click on something
  that doesnt exist so we will derict it to home */
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HeaderComponent},
  { path: 'Gallery', component: GalleryComponent },
  { path: 'Services', component: ContentServiceComponent },
  { path: 'Testomonial', component: TestomonialComponent },
  { path: 'Clients', component: ClientsComponent },
  { path: 'Pricing', component: PricesComponent },
  { path: 'About', component: IntroComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
