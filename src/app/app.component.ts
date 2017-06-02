import {Component, NgZone, AfterViewInit, ViewChild,ElementRef} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'app works!';
  isShrunk: boolean = false;
  @ViewChild('scrolltop') el:ElementRef;
  public show:boolean;
  constructor(zone: NgZone){
    window.onscroll = () => {
      zone.run( () => {
        if(window.pageYOffset > 100){
          this.isShrunk = true;
         this.show = false;
        }else {
          this.isShrunk = false;
          this.show = true;
        }
      } );
    }
  }
  sctop(){
    debugger;
    if(window.pageYOffset > 100){
      $('body').animate({ scrollTop: 0 });
    }
  }
  ngAfterViewInit(){
    this.show = true;
    $(document).ready(() => {
      $(this.el.nativeElement).on('click', event => {
        event.preventDefault();
        //$(window).scrollTop(300);
        $('body').animate({ scrollTop: 0 });
      });

      // $('.post').addClass('hidden-viewport').viewportChecker({
      //   classToAdd: 'visible animated fadeInDown', // Class to add to the elements when they are visible
      //   offset: 100
      // });
    });
  }
}
