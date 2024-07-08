import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarListaComponent } from './atualizar-lista.component';

describe('AtualizarListaComponent', () => {
  let component: AtualizarListaComponent;
  let fixture: ComponentFixture<AtualizarListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtualizarListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtualizarListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
