import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimacionesPage } from './estimaciones.page';

describe('EstimacionesPage', () => {
  let component: EstimacionesPage;
  let fixture: ComponentFixture<EstimacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimacionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
