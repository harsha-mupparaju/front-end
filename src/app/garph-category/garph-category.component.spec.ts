import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarphCategoryComponent } from './garph-category.component';

describe('GarphCategoryComponent', () => {
  let component: GarphCategoryComponent;
  let fixture: ComponentFixture<GarphCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarphCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarphCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
