import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsurgeryComponent } from './adminsurgery.component';

describe('AdminsurgeryComponent', () => {
  let component: AdminsurgeryComponent;
  let fixture: ComponentFixture<AdminsurgeryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminsurgeryComponent]
    });
    fixture = TestBed.createComponent(AdminsurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
