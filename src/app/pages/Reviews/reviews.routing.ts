/**
 * Created by bed.wuttipong on 2/25/2017 AD.
 */
import { Routes, RouterModule }  from '@angular/router';

import { ReviewsComponent } from './reviews.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ReviewsComponent
  }
];

export const routing = RouterModule.forChild(routes);
