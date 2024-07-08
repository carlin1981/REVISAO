import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListaService } from '../services/lista.service';
import { ListaCompartilhada } from '../interfaces/lista';

@Component({
  selector: 'app-adicionar-lista',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './adicionar-lista.component.html',
  styleUrls: ['./adicionar-lista.component.css']
})
export class AdicionarListaComponent {
  buscarLista = new FormControl('');

  novoListaForm = new FormGroup({
    lista_compartilhada_descricao: new FormControl('', Validators.required),
  });

  constructor(private ListaService: ListaService) {}

  adicionarLista() {
    console.log(this.novoListaForm.value);
    this.ListaService.adicionarLista(<ListaCompartilhada>this.novoListaForm.value).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => console.log(error),
    });
  }

  getListPorId() {
    const ListaId = Number(this.buscarLista.value);
    if (!isNaN(ListaId)) {
      this.ListaService.getListPorId(ListaId).subscribe({
        next: (response) => {
          console.log(response);
          this.novoListaForm.patchValue({
            lista_compartilhada_descricao: response.lista_compartilhada_descricao,
          });
        },
        error: (error) => console.log(error),
      });
    } else {
      console.error('Id inválido');
    }
  }
}
