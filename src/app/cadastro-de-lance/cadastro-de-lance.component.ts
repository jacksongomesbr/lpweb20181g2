import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-de-lance',
  templateUrl: './cadastro-de-lance.component.html',
  styleUrls: ['./cadastro-de-lance.component.css']
})
export class CadastroDeLanceComponent implements OnInit {
  tipos_de_lances = ['Passe certo',
    'Passe errado',
    'Drible',
    'Lançamento',
    'Falta recebida',
    'Falta cometida',
    'Finalização',
    'Finalização com gol',
    'Cruzamento',
    'Desarme',
    'Interceptação',
    'Defesa de finalização',
    'Cartão amarelo',
    'Cartão vermelho'];

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
      ]
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
      ]
    },
    lances: [
      { tipo: 'Passe certo', tempo: 1, instante: '00:05', jogador: 1 },
      { tipo: 'Passe errado', tempo: 1, instante: '00:06', jogador: 1 },
      { tipo: 'Interceptação', tempo: 1, instante: '00:07', jogador: 3 },
    ]
  }];
  partida = null;

  tipo = null;
  tempo = '1';
  instante_minutos = null;
  instante_segundos = null;
  jogador = null;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    for (let partida of this.partidas) {
      if (partida.id === id) {
        this.partida = partida;
      }
    }
  }

  salvar() {
    const lance = {
      tipo: this.tipo,
      tempo: Number(this.tempo),
      instante: this.instante_minutos + ':' + this.instante_segundos,
      jogador: Number(this.jogador)
    };
    this.partida.lances.push(lance);
    console.log(this.partida.lances);
  }

}
