import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorConnectingComponent } from './error-connecting.component';

describe('ErrorConnectingComponent', () => {
  let component: ErrorConnectingComponent;
  let fixture: ComponentFixture<ErrorConnectingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorConnectingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorConnectingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
