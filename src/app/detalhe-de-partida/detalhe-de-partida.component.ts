import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detalhe-de-partida',
  templateUrl: './detalhe-de-partida.component.html',
  styleUrls: ['./detalhe-de-partida.component.css']
})
export class DetalheDePartidaComponent implements OnInit {

  partidas = [{
    id: 1,
    data: '2018-06-23',
    horario: '16:00',
    mandante: {
      id: 1,
      nome: 'Palmeiras',
      jogadores: [
        {
          id: 1,
          numero: 7,
          nome: 'Dudu',
          posicao: 'Meia-atacante',
          atuacao: 'Titular'
        },
        {
          id: 2,
          numero: 6,
          nome: 'Felipe Melo',
          posicao: 'Meia',
          atuacao: 'Titular'
        },
      ],
      estatisticas: {
        total_de_passes: 0,
        total_de_passes_certos: 0,
        total_de_passes_errados: 0,
        porcentagem_de_precisao: 0
      }
    },
    visitante: {
      id: 2,
      nome: 'Palmas',
      jogadores: [
        {
          id: 3,
          numero: 6,
          nome: 'Pedrinho',
          posicao: 'Meia',
          atuacao: 'Titular'
        },
        {
          id: 4,
          numero: 8,
          nome: 'Joãozinho',
          posicao: 'Meia',
          atuacao: 'Titular'
        },
      ],
      estatisticas: {
        total_de_passes: 0,
        total_de_passes_certos: 0,
        total_de_passes_errados: 0,
        porcentagem_de_precisao: 0
      }
    },
    lances: [
      { tipo: 'Passe certo', tempo: 1, instante: '00:05', jogador: 1 },
      { tipo: 'Passe errado', tempo: 1, instante: '00:06', jogador: 1 },
      { tipo: 'Interceptação', tempo: 1, instante: '00:07', jogador: 3 },
    ]
  }];
  partida = null;

  constructor(private route: ActivatedRoute,
    private router: Router) {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    for (let partida of this.partidas) {
      if (partida.id === id) {
        this.partida = partida;
      }
    }
  }

  encontrarJogador(id) {
    if (this.partida) {
      for (let jogador of this.partida.mandante.jogadores) {
        if (jogador.id == id) {
          jogador.time = this.partida.mandante;
          return jogador;
        }
      }
      for (let jogador of this.partida.visitante.jogadores) {
        if (jogador.id == id) {
          jogador.time = this.partida.visitante;
          return jogador;
        }
      }
    }
    return null;
  }

  ngOnInit() {
    if (this.partida) {
      for (let lance of this.partida.lances) {
        const jogador = this.encontrarJogador(lance.jogador);
        if (lance.tipo == 'Passe certo') {
          jogador.time.estatisticas.total_de_passes += 1;
          jogador.time.estatisticas.total_de_passes_certos += 1;
        }
        if (lance.tipo == 'Passe errado') {
          jogador.time.estatisticas.total_de_passes += 1;
          jogador.time.estatisticas.total_de_passes_errados += 1;
        }
      }
      this.partida.mandante.estatisticas.porcentagem_de_precisao = this.partida.mandante.estatisticas.total_de_passes_certos / this.partida.mandante.estatisticas.total_de_passes * 100;
      this.partida.visitante.estatisticas.porcentagem_de_precisao = this.partida.visitante.estatisticas.total_de_passes_certos / this.partida.visitante.estatisticas.total_de_passes * 100;
    }
  }

}
