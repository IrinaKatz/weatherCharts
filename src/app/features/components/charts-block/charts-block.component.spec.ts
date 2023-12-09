import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsBlockComponent } from './charts-block.component';

describe('ChartsBlockComponent', () => {
  let component: ChartsBlockComponent;
  let fixture: ComponentFixture<ChartsBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsBlockComponent]
    });
    fixture = TestBed.createComponent(ChartsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
