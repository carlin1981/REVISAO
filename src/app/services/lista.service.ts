import { ListaCompartilhada } from './../interfaces/lista';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AtualizarListaCompartilhada } from '../interfaces/atualizarlista';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(private http: HttpClient) {}

  getLista(): Observable<any> {
    return this.http.get('http://academico3.rj.senac.br/lista-compartilhada', {});
  }
  atualizarLista(lista: AtualizarListaCompartilhada, idLista: number): Observable<AtualizarListaCompartilhada> {
    return this.http.patch<AtualizarListaCompartilhada>('http://academico3.rj.senac.br/lista-compartilhada/' + idLista, lista);
  }
  getListaPorId(idLista: number): Observable<AtualizarListaCompartilhada> {
    return this.http.get<AtualizarListaCompartilhada>('http://academico3.rj.senac.br/lista-compartilhada/' + idLista);
  }

  getListPorId(idLista: number): Observable<ListaCompartilhada> {
    return this.http.get<ListaCompartilhada>('http://academico3.rj.senac.br/lista-compartilhada/' + idLista);
  }

  adicionarLista(lista:ListaCompartilhada): Observable<ListaCompartilhada> {
    return this.http.post<ListaCompartilhada>('http://academico3.rj.senac.br/lista-compartilhada', lista);
  }
}
