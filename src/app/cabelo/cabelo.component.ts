import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'spa-cabelo',
  templateUrl: './cabelo.component.html',
  styleUrls: ['./cabelo.component.css']
})
export class CabeloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tiles: Tile[] = [
    {text: 'Xampu - do inglês, shampoo, tem a finalidade de cuidar do cabelo, e consiste em um produto utilizado principalmente para remover óleo do cabelo, sujeira, pele morta do couro cabeludo que se agregam ao cabelo com o tempo.', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Condicionador - ou amaciante de cabelo, ou ainda amaciador de cabelos é um produto usado nos cabelos, após o uso do xampu, para equilibrar o pH dos fios, e melhorar a sensação, a aparência e a capacidade de gerenciamento do cabelo. Seu principal objetivo é reduzir o atrito entre os fios para facilitar a escovação ou o penteado, o que poderia causar danos ao couro cabeludo.', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Máscara Hidratante - possibilita a hidratação do cabelo, a regeneração da fibra capilar e até a sua reconstrução. ', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Leave In - Controla o frizz: por ter função hidratante, faz com que as madeixas fiquem mais alinhadas, evitando aqueles fios arrepiados que detonam qualquer visual! Oferece proteção térmica: mesmo se você não faz uso de secador, chapinha e babyliss, seu cabelo é exposto ao sol, certo?', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

}
