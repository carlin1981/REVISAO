import { ListaService } from './../services/lista.service';
import { Component } from '@angular/core';
import { ListaCompartilhada } from '../interfaces/lista';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  lista: ListaCompartilhada[] = [];

  constructor(private ListaService: ListaService){}

  ngOnInit(): void {
    this.getLista();
  }

  getLista(): void{
    this.ListaService.getLista().subscribe({
      next: (response) => {
        this.lista = response;
        console.log(response);
      },
      error: (error) => console.log(error),
    });
  }
}
