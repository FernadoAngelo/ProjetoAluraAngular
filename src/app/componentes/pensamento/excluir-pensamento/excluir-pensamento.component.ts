import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPensamento } from '../../../models/pensamentos/pensamentos';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-excluir-pensamento',
  standalone: true,
  imports: [],
  templateUrl: './excluir-pensamento.component.html',
  styleUrl: './excluir-pensamento.component.css'
})
export class ExcluirPensamentoComponent {

  private _service = inject(PensamentoService);
  private _router = inject(Router);
  private _route = inject(ActivatedRoute);

  pensamento: IPensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  };

  constructor() { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    this._service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }

  excluirPensamento() {
    console.log(this.pensamento.id);
    if (this.pensamento.id) {
      this._service.excluir(this.pensamento.id).subscribe(() => {
        this._router.navigate(['/listarPensamento']);
      }
      );
    }
  }

  cancelar() {
    this._router.navigate(["/listarPensamento"]);
  }
}
