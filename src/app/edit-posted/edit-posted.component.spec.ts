import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPostedComponent } from './edit-posted.component';

describe('EditPostedComponent', () => {
  let component: EditPostedComponent;
  let fixture: ComponentFixture<EditPostedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPostedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPostedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
