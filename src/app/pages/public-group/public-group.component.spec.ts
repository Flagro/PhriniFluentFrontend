import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicGroupComponent } from './public-group.component';

describe('PublicGroupComponent', () => {
  let component: PublicGroupComponent;
  let fixture: ComponentFixture<PublicGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicGroupComponent]
    });
    fixture = TestBed.createComponent(PublicGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
