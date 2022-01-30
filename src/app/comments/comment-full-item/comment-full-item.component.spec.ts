import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentFullItemComponent } from './comment-full-item.component';

describe('CommentFullItemComponent', () => {
  let component: CommentFullItemComponent;
  let fixture: ComponentFixture<CommentFullItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentFullItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentFullItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
