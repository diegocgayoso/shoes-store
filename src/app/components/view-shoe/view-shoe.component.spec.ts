import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShoeComponent } from './view-shoe.component';

describe('ViewShoeComponent', () => {
  let component: ViewShoeComponent;
  let fixture: ComponentFixture<ViewShoeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewShoeComponent]
    });
    fixture = TestBed.createComponent(ViewShoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
