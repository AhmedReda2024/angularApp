import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FlowersComponent } from './flowers/flowers.component';
import { AnimalsComponent } from './animals/animals.component';
import { CarsComponent } from './cars/cars.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact',
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    title: 'Gallery',
    children: [
      {
        path: '',
        redirectTo: 'gallery',
        pathMatch: 'full',
      },
      {
        path: 'flowers',
        component: FlowersComponent,
        title: 'Flowers',
      },
      {
        path: 'animals',
        component: AnimalsComponent,
        title: 'Animals',
      },
      {
        path: 'cars',
        component: CarsComponent,
        title: 'Cars',
      },
    ],
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'Products',
  },
  { path: 'not-found', component: NotFoundComponent, title: 'error' },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
];
