import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpgComponent } from './adminpg.component';

describe('AdminpgComponent', () => {
  let component: AdminpgComponent;
  let fixture: ComponentFixture<AdminpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
