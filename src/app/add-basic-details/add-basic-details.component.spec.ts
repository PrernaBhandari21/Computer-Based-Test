import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBasicDetailsComponent } from './add-basic-details.component';

describe('AddBasicDetailsComponent', () => {
  let component: AddBasicDetailsComponent;
  let fixture: ComponentFixture<AddBasicDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBasicDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBasicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
