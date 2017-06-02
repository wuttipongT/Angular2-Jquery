/**
 * Created by bed.wuttipong on 2/25/2017 AD.
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HomeComponent} from "./home.component";
import {routing} from "./home.routing";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    routing
  ],
  providers: [],
})
export default class HomeModule { }
