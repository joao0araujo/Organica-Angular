import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.component.html',
  styleUrls: ['./pagina-login.component.css']
})
export class PaginaLoginComponent implements OnInit {

  login: string = '';
  senha: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
