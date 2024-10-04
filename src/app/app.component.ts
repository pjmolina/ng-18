import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { User } from './dominio/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoggerV2Service } from './services/loger-v2.service';
import { CurrencyPipe } from './pipes/currency.pipe';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { ResaltarDirective } from './directives/resaltar.directive';
import { PizzaComponent } from './pizzas/pizza.component';
import { Pizza } from './dominio/pizza';
import { PizzaService } from './services/pizza.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserComponent,
    CommonModule,
    FormsModule,
    CurrencyPipe,
    FilterByPipe,
    ResaltarDirective,
    PizzaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [LoggerV2Service]
})
export class AppComponent {
  title = 'app0';
  importe = 12000000.2344;
  searchText = '';
  cargando = false;
  error = '';

  pizzas: Pizza[] = [];

  lista: User[] = [
    {
      name: 'Jesica',
      surname: 'Alba',
      admin: true
    },
    {
      name: 'Pablo',
      surname: 'Sanchez'
    },
    {
      name: 'Lucia',
      surname: 'Garcia'
    }
  ];

  constructor(
    private logger: LoggerV2Service,
    private pizzaService: PizzaService
  ) {}

  selectedUser(user: User) {
    //this.logger.log('Se seleciono ' + user.name + ' ' + user.surname);
    this.logger.log(`Se seleciono ${user.name} ${user.surname}`);
  }

  cambiaNombre(): void {
    this.lista[0].name = 'Alicia';
    this.lista[0].surname = 'Keys';
  }

  toJson(obj: unknown): string {
    return JSON.stringify(obj, null, 2);
  }

  consultar(): void {
    this.cargando = true;
    this.pizzaService
      .getPizzas()
      .then((data) => {
        this.pizzas = data ?? [];
        this.error = '';
      })
      .catch((e) => {
        this.error = e.message;
        console.error(e);
      })
      .finally(() => {
        this.cargando = false;
      });
  }
}
