import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then(m => m.PerfilPage)
  },
  /*{
    path: 'productos',
    loadComponent: () => import('./productos/productos.page').then(m => m.ProductosPage)
  },*/
  {
    path: 'contacto',
    loadComponent: () => import('./contacto/contacto.page').then(m => m.ContactoPage)
  },
  {
    path: 'registrarse',
    loadComponent: () => import('./registrarse/registrarse.page').then( m => m.RegistrarsePage)
  },
  {
  path: 'FAQ',
  redirectTo: 'faq',
  pathMatch: 'full'
  },
  {
    path: 'faq',
    loadComponent: () => import('./faq/faq.page').then(m => m.FAQPage)
  }
];