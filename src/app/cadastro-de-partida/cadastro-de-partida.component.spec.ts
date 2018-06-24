import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDePartidaComponent } from './cadastro-de-partida.component';

describe('CadastroDePartidaComponent', () => {
  let component: CadastroDePartidaComponent;
  let fixture: ComponentFixture<CadastroDePartidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroDePartidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDePartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
