import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ResizeService} from "../shared/resize.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild('collapseElement', {static: true}) hiddenNavbar!: ElementRef;


  constructor(private elementRef: ElementRef, private resizeService: ResizeService) { }


  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
  }


}
