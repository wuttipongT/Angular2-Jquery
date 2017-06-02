/**
 * Created by bed.wuttipong on 2/25/2017 AD.
 */
import {Component, NgZone, AfterViewInit, ViewChild, ElementRef, ViewEncapsulation} from '@angular/core';
declare var $: any;

@Component({
  selector: 'home',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit{

  constructor(){

  }

  ngAfterViewInit(){
    $(document).ready(() => {
      $('.post').addClass('hidden-viewport').viewportChecker({
        classToAdd: 'visible animated fadeInDown', // Class to add to the elements when they are visible
        offset: 100
      });
    });
  }
}
