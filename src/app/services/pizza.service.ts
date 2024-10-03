import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../dominio/pizza';

@Injectable({ providedIn: 'root' })
export class PizzaService {
  constructor(private http: HttpClient) {}

  getPizzas(): Promise<Pizza[] | undefined> {
    return this.http.get<Pizza[]>('http://localhost:3000/pizzas').toPromise();
  }
}
