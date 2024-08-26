import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPensamento } from '../../models/pensamentos/pensamentos';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  http = inject(HttpClient);

  private _ApiUrl = "http://localhost:3000/pensamentos";

  constructor() { }


  listar(): Observable<IPensamento[]> {
    return this.http.get<IPensamento[]>(this._ApiUrl);
  }

  criar(pensamento: IPensamento): Observable<IPensamento> {
    return this.http.post<IPensamento>(this._ApiUrl, pensamento);
  }

  excluir(id: number): Observable<IPensamento> {
    const url = `${this._ApiUrl}/${id}`;
    return this.http.delete<IPensamento>(url);
  }

  buscarPorIde(id: number): Observable<IPensamento> {
    const url = `${this._ApiUrl}/${id}`;
    return this.http.get<IPensamento>(url);
  }

}
