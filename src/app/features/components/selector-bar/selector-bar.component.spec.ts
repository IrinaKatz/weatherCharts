import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorBarComponent } from './selector-bar.component';

describe('SelectorBarComponent', () => {
  let component: SelectorBarComponent;
  let fixture: ComponentFixture<SelectorBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectorBarComponent]
    });
    fixture = TestBed.createComponent(SelectorBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
