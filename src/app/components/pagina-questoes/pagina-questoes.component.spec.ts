import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaQuestoesComponent } from './pagina-questoes.component';

describe('PaginaQuestoesComponent', () => {
  let component: PaginaQuestoesComponent;
  let fixture: ComponentFixture<PaginaQuestoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaQuestoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaQuestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
