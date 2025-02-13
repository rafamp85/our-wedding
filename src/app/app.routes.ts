import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@/wedding/views/wedding-view/wedding-view.component')
  },
  {
    path: 'plane-gallery',
    loadComponent: () => import('@/wedding/views/wedding-plane/plane-gallery/plane-gallery.component')
  },
  {
    path: 'wishes',
    loadComponent: () => import('@/wedding/views/wedding-wishes/wedding-wishes.component')
  },
  {
    path: 'wishes-list',
    loadComponent: () => import('@/wedding/views/wedding-wishes/wishes-list/wishes-list.component')
  },
  {
    path: 'gallery',
    loadComponent: () => import('@/wedding/views/wedding-gallery/wedding-gallery.component')
  },
  {
    path: 'event',
    loadComponent: () => import('@/wedding/views/wedding-event/wedding-event.component')
  },
  {
    path: '**',
    redirectTo: 'wedding'
  }

];
