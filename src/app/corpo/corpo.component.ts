import { Component, OnInit } from '@angular/core';
import { produtos } from '../model/produtos';

@Component({
  selector: 'spa-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.css']
})
export class CorpoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  exibeTabelaProtetor: boolean = false;
  exibeTabelaDermocosmeticos: boolean = false;
  exibeTabelaHidratante: boolean = false;

  listaHidratantes: produtos[] = [
    { tipo: 'óleo', marca: 'Nívea', nome: 'Bela', comentarios: 'Top' },
    { tipo: 'creme', marca: 'Natura', nome: 'beauty', comentarios: 'Péssimo' },
    { tipo: 'creme', marca: 'Vichy', nome: 'hidratando', comentarios: 'Adorei' },
    { tipo: 'loção', marca: 'Loreal', nome: 'princesas', comentarios: 'Bom custo-benefício' },
    { tipo: 'manteiga', marca: 'Boticario', nome: 'da hora', comentarios: 'Razoável' }
  ]

  listaDermocosmeticos: produtos[] = [
    { tipo: 'celulite', marca: 'Natura', nome: 'SOMOS NÓS', comentarios: 'Excelente' },
    { tipo: 'celulite', marca: 'Vichy', nome: 'CELULI-MENOS', comentarios: 'Excelente' },
    { tipo: 'estrias', marca: 'Loreal', nome: 'ESTRIADA', comentarios: 'Muito bom' },
    { tipo: 'estrias', marca: 'Vichy', nome: 'MAN MON', comentarios: 'Faz o que promete' },
    { tipo: 'varises', marca: 'Vichy', nome: 'PERNANDO', comentarios: 'zero resultados' },
    { tipo: 'varises', marca: 'Natura', nome: 'VASINHOS', comentarios: 'Muito bom' }
  ]

  listaProtetores: produtos[] = [
    { tipo: 'FPS30', marca: 'Nívea', nome: 'Solaris', comentarios: 'Protege de verdade' },
    { tipo: 'FPS50', marca: 'Loreal', nome: 'Proteção Total', comentarios: 'Protegem mesmo na água' },
    { tipo: 'FPS30', marca: 'Natura', nome: 'Sol e Mar', comentarios: 'Deixou a desejar' },
    { tipo: 'FPS50', marca: 'Boticario', nome: 'Bloqueadores', comentarios: 'Muito bom' }
  ]

  exibirTabelaHidratante() {
    this.exibeTabelaHidratante = true;
    this.exibeTabelaProtetor = false;
    this.exibeTabelaDermocosmeticos = false;
  }

  exibirTabelaProtetor() {
    this.exibeTabelaHidratante = false;
    this.exibeTabelaProtetor = true;
    this.exibeTabelaDermocosmeticos = false;
  }

  exibirTabelaDermocosmeticos() {
    this.exibeTabelaHidratante = false;
    this.exibeTabelaProtetor = false;
    this.exibeTabelaDermocosmeticos = true;
  }
}