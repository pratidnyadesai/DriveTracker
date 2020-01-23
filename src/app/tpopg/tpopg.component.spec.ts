import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpopgComponent } from './tpopg.component';

describe('TpopgComponent', () => {
  let component: TpopgComponent;
  let fixture: ComponentFixture<TpopgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpopgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpopgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
