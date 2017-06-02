/**
 * Created by bed.wuttipong on 2/25/2017 AD.
 */
import { Routes, RouterModule }  from '@angular/router';

import { AboutComponent } from './about.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  }
];

export const routing = RouterModule.forChild(routes);
