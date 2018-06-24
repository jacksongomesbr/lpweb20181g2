import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-de-partida',
  templateUrl: './cadastro-de-partida.component.html',
  styleUrls: ['./cadastro-de-partida.component.css']
})
export class CadastroDePartidaComponent implements OnInit {
  times = [
    { id: 0, nome: 'Flamengo' },
    { id: 1, nome: 'Corinthians' },
    { id: 2, nome: 'Palmeiras' },
    { id: 3, nome: 'Palmas' },
  ];

  partidas = [];

  data = null;
  horario = null;
  mandante = null;
  visitante = null;

  constructor() { }

  ngOnInit() {
  }

  salvar() {
    const id = this.partidas.length + 1;
    this.partidas.push({
      id: id,
      data: this.data,
      horario: this.horario,
      mandante: this.mandante,
      visitante: this.visitante
    });
    console.log(this.partidas);
  }

}
