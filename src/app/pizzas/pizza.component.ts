import { Component, Input } from '@angular/core';
import { Pizza } from '../dominio/pizza';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PizzaService } from '../services/pizza.service';
//import { C3DTBatchTable } from 'itowns';
// import * as ITOWNS from 'itowns/dist/itowns';

@Component({
  selector: 'app-pizza',
  standalone: true,
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.scss',
  imports: [CommonModule, FormsModule]
})
export class PizzaComponent {
  @Input()
  pizza: Pizza | undefined;
  estado = '';

  constructor(private pizzaService: PizzaService) {}

  actualizar() {
    if (this.pizza) {
      this.pizzaService.updatePizza(this.pizza.id, this.pizza).subscribe({
        next: () => {
          this.estado = 'OK';
        },
        error: (e) => {
          this.estado = e.message;
        }
      });
    }
  }
  borrar() {
    if (this.pizza) {
      this.pizzaService.deletePizza(this.pizza.id).subscribe({
        next: () => {
          this.estado = 'OK';
        },
        error: (e) => {
          this.estado = e.message;
        }
      });
    }
  }
}
