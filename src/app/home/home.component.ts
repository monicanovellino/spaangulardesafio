import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  exibeCorpo: boolean = false;
  exibeRosto: boolean = false;
  exibeCabelo: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  abreCorpo() {
    this.exibeCabelo = false;
    this.exibeCorpo = true;
    this.exibeRosto = false;
  }
  abreCabelo() {
    this.exibeCabelo = true;
    this.exibeCorpo = false;
    this.exibeRosto = false;
  }
  abreRosto() {
    this.exibeCabelo = false;
    this.exibeCorpo = false;
    this.exibeRosto = true;
  }

}
