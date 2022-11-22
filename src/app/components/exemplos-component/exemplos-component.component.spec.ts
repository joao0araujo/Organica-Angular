import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplosComponentComponent } from './exemplos-component.component';

describe('ExemplosComponentComponent', () => {
  let component: ExemplosComponentComponent;
  let fixture: ComponentFixture<ExemplosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemplosComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemplosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
