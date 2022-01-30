import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appAlertDirective]'
})
export class AlertDirective {
  @HostBinding('class.d-none') isClosed = false;


  constructor() {
    console.log()
  }

  @HostListener('click') closeAlert(){
    this.isClosed = true;
  }

}
