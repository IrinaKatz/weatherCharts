import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsElementComponent } from './charts-element.component';

describe('ChartsElementComponent', () => {
  let component: ChartsElementComponent;
  let fixture: ComponentFixture<ChartsElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsElementComponent]
    });
    fixture = TestBed.createComponent(ChartsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
