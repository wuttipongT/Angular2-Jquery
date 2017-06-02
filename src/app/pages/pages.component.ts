/**
 * Created by bed.wuttipong on 2/25/2017 AD.
 */
import {Component, ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  template: `
        <router-outlet></router-outlet>
    `
})
export class PagesComponent {

  constructor() {
  }

  ngOnInit() {
  }
}
