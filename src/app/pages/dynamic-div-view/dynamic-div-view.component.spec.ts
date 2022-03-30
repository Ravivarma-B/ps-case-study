import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDivViewComponent } from './dynamic-div-view.component';

describe('DynamicDivViewComponent', () => {
  let component: DynamicDivViewComponent;
  let fixture: ComponentFixture<DynamicDivViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicDivViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDivViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
