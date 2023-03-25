import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemDailogComponent } from './add-item-dailog.component';

describe('AddItemDailogComponent', () => {
  let component: AddItemDailogComponent;
  let fixture: ComponentFixture<AddItemDailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemDailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
