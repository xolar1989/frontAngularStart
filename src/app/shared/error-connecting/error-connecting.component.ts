import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-error-connecting',
  templateUrl: './error-connecting.component.html',
  styleUrls: ['./error-connecting.component.css']
})
export class ErrorConnectingComponent implements OnInit {

  @Input() message:string;

  constructor() { }

  ngOnInit(): void {
  }

}
