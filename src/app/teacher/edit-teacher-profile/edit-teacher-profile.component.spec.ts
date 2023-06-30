import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeacherProfileComponent } from './edit-teacher-profile.component';

describe('EditTeacherProfileComponent', () => {
  let component: EditTeacherProfileComponent;
  let fixture: ComponentFixture<EditTeacherProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTeacherProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTeacherProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
