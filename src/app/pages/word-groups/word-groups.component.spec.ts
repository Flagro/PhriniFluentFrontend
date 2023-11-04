import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordGroupsComponent } from './word-groups.component';

describe('WordGroupsComponent', () => {
  let component: WordGroupsComponent;
  let fixture: ComponentFixture<WordGroupsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WordGroupsComponent]
    });
    fixture = TestBed.createComponent(WordGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
