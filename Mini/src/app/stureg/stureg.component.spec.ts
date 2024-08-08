import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SturegComponent } from './stureg.component';

describe('SturegComponent', () => {
  let component: SturegComponent;
  let fixture: ComponentFixture<SturegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SturegComponent]
    });
    fixture = TestBed.createComponent(SturegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
