import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaQuemsomosComponent } from './pagina-quemsomos.component';

describe('PaginaQuemsomosComponent', () => {
  let component: PaginaQuemsomosComponent;
  let fixture: ComponentFixture<PaginaQuemsomosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaQuemsomosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaQuemsomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
