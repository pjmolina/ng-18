import { Component, Input } from '@angular/core';
import { Pizza } from '../dominio/pizza';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
}
