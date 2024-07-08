import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarListaComponent } from './adicionar-lista.component';

describe('AdicionarListaComponent', () => {
  let component: AdicionarListaComponent;
  let fixture: ComponentFixture<AdicionarListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdicionarListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
