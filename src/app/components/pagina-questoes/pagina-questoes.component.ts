import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-questoes',
  templateUrl: './pagina-questoes.component.html',
  styleUrls: ['./pagina-questoes.component.css']
})
export class PaginaQuestoesComponent implements OnInit {

  quests = [
    {titulo: 'exemplo de titulo dinamico 1', questao: 'exemplo de questao dinamica 1'},
    {titulo: 'exemplo de titulo dinamico 2', questao: 'exemplo de questao dinamica 2'},
    {titulo: 'exemplo de titulo dinamico 3', questao: 'exemplo de questao dinamica 3'}
  ];

  imagens= [];


  

  constructor() { }

  ngOnInit(): void {
  }

}
