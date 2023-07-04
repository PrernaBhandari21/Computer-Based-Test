import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingTestsComponent } from './upcoming-tests.component';

describe('UpcomingTestsComponent', () => {
  let component: UpcomingTestsComponent;
  let fixture: ComponentFixture<UpcomingTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingTestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
