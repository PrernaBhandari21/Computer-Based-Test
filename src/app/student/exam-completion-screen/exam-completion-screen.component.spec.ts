import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamCompletionScreenComponent } from './exam-completion-screen.component';

describe('ExamCompletionScreenComponent', () => {
  let component: ExamCompletionScreenComponent;
  let fixture: ComponentFixture<ExamCompletionScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamCompletionScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamCompletionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
