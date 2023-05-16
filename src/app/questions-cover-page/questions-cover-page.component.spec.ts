import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsCoverPageComponent } from './questions-cover-page.component';

describe('QuestionsCoverPageComponent', () => {
  let component: QuestionsCoverPageComponent;
  let fixture: ComponentFixture<QuestionsCoverPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsCoverPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionsCoverPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
