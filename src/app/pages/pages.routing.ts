/**
 * Created by bed.wuttipong on 2/25/2017 AD.
 */
import { Routes, RouterModule }  from '@angular/router';
import { PagesComponent } from './pages.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  // {
  //   path: 'login',
  //   loadChildren: () => System.import('./login/login.module')
  // },
  // {
  //   path: 'register',
  //   loadChildren: () => System.import('./register/register.module')
  // },
  // {
  //   path: 'pages',
  //   component: Pages,
  //   children: [
  //     { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  //     { path: 'dashboard', loadChildren: () => System.import('./dashboard/dashboard.module') }
  //   ]
  // }
  {
    path: '',
    loadChildren: './home/home.module'
  },
  {
    path: 'home',
    loadChildren: './home/home.module'
  },
  {
    path: 'about-us',
    loadChildren: './about/about.module'
  },
  {
    path: 'story',
    loadChildren: './story/story.module'
  },
  {
    path: 'reviews',
    loadChildren: './reviews/reviews.module'
  },
  {
    path: 'contact',
    loadChildren: './contact/contact.module'
  },
];

export const routing = RouterModule.forChild(routes);
