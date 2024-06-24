import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturesTopComponent } from './pictures-top.component';

describe('PicturesTopComponent', () => {
  let component: PicturesTopComponent;
  let fixture: ComponentFixture<PicturesTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PicturesTopComponent]
    });
    fixture = TestBed.createComponent(PicturesTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
