import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { IPensamento } from '../../../models/pensamentos/pensamentos';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {

  pensamento: IPensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  };

  private _service = inject(PensamentoService);
  private _router = inject(Router)
  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento() {
    this._service.criar(this.pensamento).subscribe();
    this._router.navigate(['/listarPensamento'])
  }

  cancelar() {
    this._router.navigate(['/listarPensamento'])
  }

}
