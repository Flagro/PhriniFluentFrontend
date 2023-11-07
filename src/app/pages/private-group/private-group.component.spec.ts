import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateGroupComponent } from './private-group.component';

describe('PrivateGroupComponent', () => {
  let component: PrivateGroupComponent;
  let fixture: ComponentFixture<PrivateGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivateGroupComponent]
    });
    fixture = TestBed.createComponent(PrivateGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
