import { Component, input } from '@angular/core';
import { NgOptimizedImage, CommonModule } from '@angular/common';
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

  textoTeste = '';

  buttonName = 'Testando';
  
  teste = false;
  
  testeFunction(){
    this.teste = !this.teste;
  }

  showFramework(){
    alert(this.textoTeste);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
