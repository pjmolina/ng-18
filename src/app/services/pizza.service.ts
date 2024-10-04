import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../dominio/pizza';
import { first, map, Observable } from 'rxjs';

const apiBase = 'http://localhost:3000';

/** Implementación con Observables */
@Injectable({ providedIn: 'root' })
export class PizzaService {
  constructor(private http: HttpClient) {}

  getPizzas(): Observable<Pizza[] | undefined> {
    const url = `${apiBase}/pizzas`;
    return this.http
      .get<Pizza[]>(url, {
        headers: {
          'x-client-version': '1.0',
          Authorize: 'Bearer lksdlfklsfssdss'
        }
      })
      .pipe(map((listaDePizzas) => listaDePizzas.map((p) => meteIva(p))));
  }
  getPizza(id: number): Observable<Pizza | undefined> {
    const url = `${apiBase}/pizzas/${encodeURIComponent(id)}`;
    return this.http.get<Pizza>(url).pipe(map((p) => meteIva(p)));
  }
  deletePizza(id: number): Observable<Pizza | undefined> {
    const url = `${apiBase}/pizzas/${encodeURIComponent(id)}`;
    return this.http.delete<Pizza>(url);
  }
  createPizza(pizza: Pizza): Observable<Pizza | undefined> {
    const url = `${apiBase}/pizzas/`;
    return this.http.post<Pizza>(url, pizza, {});
  }
  updatePizza(id: number, pizza: Pizza): Observable<Pizza | undefined> {
    const url = `${apiBase}/pizzas/${encodeURIComponent(id)}`;
    return this.http.put<Pizza>(url, pizza);
  }
}

const meteIva = (pizza: Pizza): Pizza => {
  pizza.price *= 1.1;
  return pizza;
};
