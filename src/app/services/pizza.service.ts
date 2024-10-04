import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../dominio/pizza';

const apiBase = 'http://localhost:3000/';

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
  getPizza(name: string): Promise<Pizza | undefined> {
    const url = `${apiBase}/pizzas/${encodeURIComponent(name)}`;
    return this.http.get<Pizza>(url).toPromise();
  }
  deletePizza(name: string): Promise<Pizza | undefined> {
    const url = `${apiBase}/pizzas/${encodeURIComponent(name)}`;
    return this.http.delete<Pizza>(url).toPromise();
  }
  createPizza(pizza: Pizza): Promise<Pizza | undefined> {
    const url = `${apiBase}/pizzas/`;
    return this.http.post<Pizza>(url, pizza, {}).toPromise();
  }
  updatePizza(name: string, pizza: Pizza): Promise<Pizza | undefined> {
    const url = `${apiBase}/pizzas/${encodeURIComponent(name)}`;
    return this.http.put<Pizza>(url, pizza).toPromise();
  }
}
