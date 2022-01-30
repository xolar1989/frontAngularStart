import { Injectable } from '@angular/core';
import {distinctUntilChanged, Observable, Subject} from "rxjs";
import {SCREEN_SIZE} from "./screen-size";

@Injectable({
  providedIn: 'root'
})
export class ResizeService {

  constructor() { }

  private resizeSubject = new Subject<SCREEN_SIZE>();

  onResize(size:SCREEN_SIZE){
    this.resizeSubject.next(size)
  }

  get onResize$(): Observable<SCREEN_SIZE> {
    return this.resizeSubject.asObservable().pipe(distinctUntilChanged());
  }

}
