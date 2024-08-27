import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule, FormsModule],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {
  nome = 'Fer';

  valorTeste = 'Inicial';

  textoTeste = '';

  buttonName = 'Testando';

  teste = false;

  testeFunction() {
    this.teste = !this.teste;
  }

  testeFunctionBind() {
    this.valorTeste = 'valor alterado';
  }

  showFramework() {
    alert(this.textoTeste);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
