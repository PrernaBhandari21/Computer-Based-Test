import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishTestsComponent } from './publish-tests.component';

describe('PublishTestsComponent', () => {
  let component: PublishTestsComponent;
  let fixture: ComponentFixture<PublishTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishTestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
