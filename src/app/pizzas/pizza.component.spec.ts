import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PizzaComponent } from './pizza.component';
import { PizzaService } from '../services/pizza.service';
import { Pizza } from '../dominio/pizza';
import { Observable, of } from 'rxjs';

class PizzaServiceMock {
  updatePizza(id: number, pizza: Pizza): Observable<Pizza | undefined> {
    return of(pizza);
  }
  deletePizza(id: number): Observable<Pizza | undefined> {
    return of({
      id,
      name: 'Piña',
      price: 12,
      imageUrl: 'ssssss'
    } as Pizza);
  }
}

describe('PizzaComponent', () => {
  let component: PizzaComponent;
  let fixture: ComponentFixture<PizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaComponent],
      providers: [{ provide: PizzaService, useClass: PizzaServiceMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(PizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show no datos without pizza', () => {
    expect(component.pizza).toEqual(undefined);

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div')?.textContent).toContain(
      'Sin datos...'
    );
  });
  it('should show pizza when have data', () => {
    const p1 = {
      id: 1,
      name: 'Carbonara',
      price: 12,
      imageUrl: 'ssss...'
    } as Pizza;

    component.pizza = p1;

    expect(component.pizza).toEqual(p1);

    fixture.detectChanges();
    fixture.detectChanges();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    // expect(compiled.querySelector('input')?.textContent).toContain(p1.name);
    expect(compiled.querySelector('button')?.textContent).toContain(
      'Actualizar'
    );
  });
  it('should show pizza when have data', () => {
    const p1 = {
      id: 1,
      name: 'Carbonara',
      price: 12,
      imageUrl: 'ssss...'
    } as Pizza;

    component.pizza = p1;

    expect(component.pizza).toEqual(p1);

    fixture.detectChanges();
    fixture.detectChanges();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    // expect(compiled.querySelector('input')?.textContent).toContain(p1.name);
    expect(compiled.querySelector('button')?.textContent).toContain(
      'Actualizar'
    );

    component.pizza.name = 'v2';
    component.actualizar();

    component.borrar();
  });
});
