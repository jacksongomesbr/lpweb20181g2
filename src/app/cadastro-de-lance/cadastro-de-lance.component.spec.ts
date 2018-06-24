import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDeLanceComponent } from './cadastro-de-lance.component';

describe('CadastroDeLanceComponent', () => {
  let component: CadastroDeLanceComponent;
  let fixture: ComponentFixture<CadastroDeLanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroDeLanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDeLanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
