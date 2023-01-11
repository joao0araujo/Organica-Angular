import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestaoEspecificaComponent } from './questao-especifica.component';

describe('QuestaoEspecificaComponent', () => {
  let component: QuestaoEspecificaComponent;
  let fixture: ComponentFixture<QuestaoEspecificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestaoEspecificaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestaoEspecificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
