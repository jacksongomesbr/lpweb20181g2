import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CadastroDePartidaComponent } from './cadastro-de-partida/cadastro-de-partida.component';
import { DetalheDePartidaComponent } from './detalhe-de-partida/detalhe-de-partida.component';
import { CadastroDeLanceComponent } from './cadastro-de-lance/cadastro-de-lance.component';

const rotas: Routes = [
  { path: 'partidas', component: CadastroDePartidaComponent },
  { path: 'partidas/:id', component: DetalheDePartidaComponent },
  { path: 'partidas/:id/lances', component: CadastroDeLanceComponent }
  /*
  {path: 'disciplinas/:id', component: EditorDeDisciplinaComponent},
  {path: '', component: HomeComponent,},
  {path: '**', component: PaginaNaoEncontradaComponent}
  */
];


@NgModule({
  declarations: [
    AppComponent,
    CadastroDePartidaComponent,
    DetalheDePartidaComponent,
    CadastroDeLanceComponent
  ],
  imports: [
    RouterModule.forRoot(
      rotas,
      { enableTracing: true }
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
