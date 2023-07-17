import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsDateComponent } from './parents-date.component';

describe('ParentsDateComponent', () => {
  let component: ParentsDateComponent;
  let fixture: ComponentFixture<ParentsDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentsDateComponent]
    });
    fixture = TestBed.createComponent(ParentsDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
