/**
 * Created by bed.wuttipong on 2/25/2017 AD.
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AboutComponent} from "./about.component";
import {routing} from "./about.routing";

@NgModule({
  declarations: [AboutComponent],
  imports: [
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    routing
  ],
  providers: [],
})
export default class AboutModule { }
