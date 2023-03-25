import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginDailogComponent } from './admin-login-dailog.component';

describe('AdminLoginDailogComponent', () => {
  let component: AdminLoginDailogComponent;
  let fixture: ComponentFixture<AdminLoginDailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLoginDailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
