import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { PensamentoComponent } from "../pensamento/pensamento.component";
import { IPensamento } from './../../../models/pensamentos/pensamentos';

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [PensamentoComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css',
})
export class ListarPensamentoComponent {

  private _services = inject(PensamentoService);

  listaPensamentos: IPensamento[] = [];

  constructor() { }

  ngOnInit(): void {
    this._services.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

}
