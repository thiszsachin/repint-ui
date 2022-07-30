import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}
  isMoved = 'header-shrink-none';
  topClass = 'scroolISOn';
  title = 'reprint';
  scrollWidth = 0;
  height = 0;

  @HostListener('window:scroll') onScroll(e: Event): void {
    this.height = window.document.documentElement.scrollTop;

    console.log('INEER', this.height);

    // this.scrollWidth = window.document.documentElement.scrollTop;
    let per =
      ((window.innerHeight / 2 - document.documentElement.scrollTop) /
        window.innerHeight) *
      100;
    console.log('DDSS', per);

    if (document.documentElement.scrollTop >= 50) {
      this.topClass = 'moveToTop-wrapper';
    }
    if (document.documentElement.scrollTop < 50) {
      this.topClass = 'scroolISOn';
    }
    // // this.scrollWidth = window.document.documentElement.scrollTop

    // console.log(document.documentElement.scrollTop);
    if (window.document.documentElement.scrollTop >= 250) {
      this.isMoved = 'header-shrink';
      // this.isMoved = true;
    }
    if (window.document.documentElement.scrollTop < 250) {
      this.isMoved = 'header-shrink-none';
    }
  }

  @HostListener('window.scroll', ['$event'])
  doSomething(event: {
    currentTarget: {
      scrollTop: any;
      scrollHeight: number;
      clientHeight: number;
    };
  }) {
    var winScroll = event.currentTarget.scrollTop;
    var height =
      event.currentTarget.scrollHeight - event.currentTarget.clientHeight;
    var scrolled = (winScroll / height) * 100;
    console.log('Scroll %', scrolled);
    this.height = scrolled;

    // window.document.getElementById('scrollBar')?.style.width = scrolled;
    // window.document.getElementById('scrollBar').style.width = scrolled + '%';
  }

  onActivate(event: any) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
