import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'spa-rosto',
  templateUrl: './rosto.component.html',
  styleUrls: ['./rosto.component.css']
})
export class RostoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  produtosParaRosto: string[] = ['Maquiagem', 'Protetor Solar', 'Anti-rugas', 'Clareador'];
}
