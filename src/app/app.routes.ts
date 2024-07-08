import { Routes } from '@angular/router';

import { ListaComponent } from './lista/lista.component';
import { AtualizarListaComponent } from './atualizar-lista/atualizar-lista.component';
import { AdicionarListaComponent } from './adicionar-lista/adicionar-lista.component';


export const routes: Routes = [
  {
    path: 'lista',
    component: ListaComponent
  },
  {
    path: 'atualizarlista',
    component: AtualizarListaComponent
  },
  {
    path: 'adicionar',
    component: AdicionarListaComponent
  },
];
