import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowComponent } from './low.component';

describe('LowComponent', () => {
  let component: LowComponent;
  let fixture: ComponentFixture<LowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
