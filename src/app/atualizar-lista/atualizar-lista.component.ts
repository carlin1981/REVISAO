import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListaService } from '../services/lista.service';
import { ListaCompartilhada } from '../interfaces/lista';
@Component({
  selector: 'app-atualizar-lista',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './atualizar-lista.component.html',
  styleUrl: './atualizar-lista.component.css'
})
export class AtualizarListaComponent {
  buscarLista = new FormControl;

  listaForm = new FormGroup({
    lista_compartilhada_id: new FormControl(0, Validators.required),
    lista_compartilhada_descricao: new FormControl('', Validators.required),
   });

   constructor(private ListaService: ListaService){}

   OnSubmit(){
     console.log(this.listaForm.value);
     this.ListaService.atualizarLista(<ListaCompartilhada>this.listaForm.value, <number>this.listaForm.value.lista_compartilhada_id).subscribe({
       next: (response) => {
         console.log(response);
       },
       error: (error) => console.log(error),
     })
   }

   getListaPorId(){
     this.ListaService.getListaPorId(this.buscarLista.value).subscribe({
       next: (response) =>{
         console.log(response);
         this.listaForm.patchValue(
           {
            lista_compartilhada_id: response.lista_compartilhada_id,
            lista_compartilhada_descricao:response.lista_compartilhada_descricao,
           }
         )
       },
       error: (error) => console.log(error),
     })
   }
}
