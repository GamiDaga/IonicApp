import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasDePendientesPage } from './listas-de-pendientes.page';

describe('ListasDePendientesPage', () => {
  let component: ListasDePendientesPage;
  let fixture: ComponentFixture<ListasDePendientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasDePendientesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasDePendientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
