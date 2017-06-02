/**
 * Created by bed.wuttipong on 2/25/2017 AD.
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ContactComponent} from "./contact.component";
import {routing} from "./contact.routing";

@NgModule({
  declarations: [ContactComponent],
  imports: [
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    routing
  ],
  providers: [],
})
export default class ContactModule { }
