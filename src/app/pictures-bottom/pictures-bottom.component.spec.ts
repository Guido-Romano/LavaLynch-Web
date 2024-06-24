import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturesBottomComponent } from './pictures-bottom.component';

describe('PicturesBottomComponent', () => {
  let component: PicturesBottomComponent;
  let fixture: ComponentFixture<PicturesBottomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PicturesBottomComponent]
    });
    fixture = TestBed.createComponent(PicturesBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
