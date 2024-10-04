import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../dominio/pizza';

const apiBase = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PizzaService {
  constructor(private http: HttpClient) {}

  getPizzas(): Promise<Pizza[] | undefined> {
    const url = `${apiBase}/pizzas`;
    return this.http
      .get<Pizza[]>(url, {
        headers: {
          'x-client-version': '1.0',
          Authorize: 'Bearer lksdlfklsfssdss'
        }
      })
      .toPromise();
  }
  getPizza(id: number): Promise<Pizza | undefined> {
    const url = `${apiBase}/pizzas/${encodeURIComponent(id)}`;
    return this.http.get<Pizza>(url).toPromise();
  }
  deletePizza(id: number): Promise<Pizza | undefined> {
    const url = `${apiBase}/pizzas/${encodeURIComponent(id)}`;
    return this.http.delete<Pizza>(url).toPromise();
  }
  createPizza(pizza: Pizza): Promise<Pizza | undefined> {
    const url = `${apiBase}/pizzas/`;
    return this.http.post<Pizza>(url, pizza, {}).toPromise();
  }
  updatePizza(id: number, pizza: Pizza): Promise<Pizza | undefined> {
    const url = `${apiBase}/pizzas/${encodeURIComponent(id)}`;
    return this.http.put<Pizza>(url, pizza).toPromise();
  }
}
