import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWaysBidingComponent } from './two-ways-biding.component';

describe('TwoWaysBidingComponent', () => {
  let component: TwoWaysBidingComponent;
  let fixture: ComponentFixture<TwoWaysBidingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoWaysBidingComponent]
    });
    fixture = TestBed.createComponent(TwoWaysBidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
