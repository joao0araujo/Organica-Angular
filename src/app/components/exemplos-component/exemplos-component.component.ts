import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-component',
  templateUrl: './exemplos-component.component.html',
  styleUrls: ['./exemplos-component.component.css']
})
export class ExemplosComponentComponent implements OnInit {

  questos = [
    {titulo: 'exemplo de titulo dinamico 1', questao: 'exemplo de questao dinamica 1'},
    {titulo: 'exemplo de titulo dinamico 2', questao: 'exemplo de questao dinamica 2'}
  ];

  imagens = [];

  constructor() { }

  ngOnInit(): void {
  }

}
