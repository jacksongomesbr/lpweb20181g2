import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheDePartidaComponent } from './detalhe-de-partida.component';

describe('DetalheDePartidaComponent', () => {
  let component: DetalheDePartidaComponent;
  let fixture: ComponentFixture<DetalheDePartidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheDePartidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheDePartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
