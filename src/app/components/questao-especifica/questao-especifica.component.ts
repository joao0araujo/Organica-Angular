import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questao-especifica',
  templateUrl: './questao-especifica.component.html',
  styleUrls: ['./questao-especifica.component.css']
})
export class QuestaoEspecificaComponent implements OnInit {

  titulo = "Exemplo de titulo - ENEM";
  questao = "Exemplo de questão";

  constructor() { }

  ngOnInit(): void {
  }

}
