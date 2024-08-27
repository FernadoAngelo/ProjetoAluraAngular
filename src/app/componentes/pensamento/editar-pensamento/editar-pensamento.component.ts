import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IPensamento } from '../../../models/pensamentos/pensamentos';
import { PensamentoService } from '../pensamento.service';


@Component({
  selector: 'app-editar-pensamento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.css'
})
export class EditarPensamentoComponent {

  private _service = inject(PensamentoService);
  private _router = inject(Router);
  private _route = inject(ActivatedRoute);

  constructor() { }

  pensamento: IPensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  };

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    this._service.buscarPorId(parseInt(id!)).subscribe((pensamento: IPensamento) => {
      this.pensamento = pensamento;
    });
  }

  editarPensamento() {
    this._service.editar(this.pensamento).subscribe(() => {
      this._router.navigate(['/listarPensamento']);
    });
  }

  cancelar() {
    this._router.navigate(['/listarPensamento'])
  }

}
