/**
 * Created by bed.wuttipong on 2/25/2017 AD.
 */
import { Routes, RouterModule }  from '@angular/router';

import { StoryComponent } from './story.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: StoryComponent
  }
];

export const routing = RouterModule.forChild(routes);
