import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotionWordsTopComponent } from './motion-words-top.component';

describe('MotionWordsTopComponent', () => {
  let component: MotionWordsTopComponent;
  let fixture: ComponentFixture<MotionWordsTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotionWordsTopComponent]
    });
    fixture = TestBed.createComponent(MotionWordsTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
