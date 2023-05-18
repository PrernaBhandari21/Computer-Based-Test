import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeTestStructureComponent } from './make-test-structure.component';

describe('MakeTestStructureComponent', () => {
  let component: MakeTestStructureComponent;
  let fixture: ComponentFixture<MakeTestStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeTestStructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeTestStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
