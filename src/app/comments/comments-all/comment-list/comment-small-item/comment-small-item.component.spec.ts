import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentSmallItemComponent } from './comment-small-item.component';

describe('CommentSmallItemComponent', () => {
  let component: CommentSmallItemComponent;
  let fixture: ComponentFixture<CommentSmallItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentSmallItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentSmallItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
