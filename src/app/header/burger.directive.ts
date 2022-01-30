import {Directive, ElementRef, HostBinding, HostListener, Input, ViewChild} from '@angular/core';

@Directive({
  selector: '[appBurger]'
})
export class BurgerDirective {

  @HostBinding('class.dupa') isOpen = false;

  @Input() collapseElements: ElementRef | undefined;


  initClasses: string = "collapse";

  constructor() {
    // console.log(this.collapseElements)
  }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    this.changeStateOfCollapse();
  }

  @HostListener('window:resize', []) onResize() {
    console.log(window.innerWidth)
    if(window.innerWidth >= 992){
      this.isOpen = false;
      this.changeStateOfCollapse();
    }
  }

  private changeStateOfCollapse(){
    if(this.collapseElements !== undefined){
      this.collapseElements
        .nativeElement.className = this.isOpen ?
        `${this.initClasses} show` : this.initClasses;

      // console.log(this.collapseElements)
      // console.log(this.collapseElements.nativeElement.className)

    }
  }

}
