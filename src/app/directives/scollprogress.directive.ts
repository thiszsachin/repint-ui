// scrollprogress.directive.ts
import { Directive, HostListener } from '@angular/core';
import { Scroll } from '@angular/router';

@Directive({
  selector: '[appScollprogress]',
})
export class ScollprogressDirective {
  constructor() {}

  @HostListener('scroll', ['$event'])
  doSomething(event: any) {
    var winScroll = event.currentTarget.scrollTop;
    var height =
      event.currentTarget.scrollHeight - event.currentTarget.clientHeight;
    var scrolled = (winScroll / height) * 100;

    console.debug('Scroll %', scrolled);
    // window.document.getElementById('scrollBar').style.width = scrolled + '%';
  }
}
