import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IPensamento } from '../../../models/pensamentos/pensamentos';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [NgClass, PensamentoComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {

  @Input() pensamento: IPensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  retornaURLImg() {
    return "../../../../assets/imagens/" + this.pensamento.modelo + ".png";
  }

  larguraPensamento() {
    if (this.pensamento.conteudo.length >= 256) {
      return "pensamento-g";
    }
    return "pensamento-p";
  }



}
