import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasDeTareasPage } from './listas-de-tareas.page';

describe('ListasDeTareasPage', () => {
  let component: ListasDeTareasPage;
  let fixture: ComponentFixture<ListasDeTareasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasDeTareasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasDeTareasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
