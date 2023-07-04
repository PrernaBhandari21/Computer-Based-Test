import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousTestsComponent } from './previous-tests.component';

describe('PreviousTestsComponent', () => {
  let component: PreviousTestsComponent;
  let fixture: ComponentFixture<PreviousTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousTestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
