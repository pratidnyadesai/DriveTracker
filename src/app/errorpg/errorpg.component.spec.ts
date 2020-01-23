import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorpgComponent } from './errorpg.component';

describe('ErrorpgComponent', () => {
  let component: ErrorpgComponent;
  let fixture: ComponentFixture<ErrorpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
