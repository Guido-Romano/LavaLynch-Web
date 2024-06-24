import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotionWordsBottomComponent } from './motion-words-bottom.component';

describe('MotionWordsBottomComponent', () => {
  let component: MotionWordsBottomComponent;
  let fixture: ComponentFixture<MotionWordsBottomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotionWordsBottomComponent]
    });
    fixture = TestBed.createComponent(MotionWordsBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
