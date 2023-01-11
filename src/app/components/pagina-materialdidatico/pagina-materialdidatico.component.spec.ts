import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMaterialdidaticoComponent } from './pagina-materialdidatico.component';

describe('PaginaMaterialdidaticoComponent', () => {
  let component: PaginaMaterialdidaticoComponent;
  let fixture: ComponentFixture<PaginaMaterialdidaticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaMaterialdidaticoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaMaterialdidaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
