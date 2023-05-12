import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionStructureComponent } from './collection-structure.component';

describe('CollectionStructureComponent', () => {
  let component: CollectionStructureComponent;
  let fixture: ComponentFixture<CollectionStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionStructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
