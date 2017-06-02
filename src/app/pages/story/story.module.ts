/**
 * Created by bed.wuttipong on 2/25/2017 AD.
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {StoryComponent} from "./story.component";
import {routing} from "./story.routing";

@NgModule({
  declarations: [StoryComponent],
  imports: [
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    routing
  ],
  providers: [],
})
export default class StoryModule { }
