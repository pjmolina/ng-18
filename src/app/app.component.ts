import {
  Component,
  ViewChild,
  OnInit,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
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
import {
  buffer,
  bufferTime,
  filter,
  from,
  fromEvent,
  interval,
  map,
  merge,
  mergeWith,
  Observable,
  Subscription,
  throttleTime
} from 'rxjs';

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
export class AppComponent implements AfterViewInit, OnDestroy {
  // @ViewChild('z1', { static: true }) zona!: HTMLDivElement;

  title = 'app0';
  importe = 12000000.2344;
  searchText = '';
  cargando = false;
  error = '';

  mensajes = '';

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
  $obs1!: Observable<Event>;

  constructor(
    private logger: LoggerV2Service,
    private pizzaService: PizzaService
  ) {}

  count = 0;
  sub?: Subscription;

  ngAfterViewInit(): void {
    const zone = window.document.getElementById('z1')!;
    const textBox = window.document.getElementById('t2')!;

    const $clicks = fromEvent(zone, 'click').pipe(map((e) => '*'));
    const $keys = fromEvent(textBox, 'keypress').pipe(
      map((e: Event) => (e as KeyboardEvent).key)
    );

    const $final: Observable<string> = $clicks.pipe(mergeWith($keys));

    // const $final = fromEvent(zone, 'click').pipe(
    //   bufferTime(1000),
    //   map((b) => b.length),
    //   filter((x) => {
    //     // console.log('filtrando...');
    //     return x >= 2;
    //   })
    // );

    this.sub = $final.subscribe({
      next: (d) => {
        this.mensajes += `${d}`;
        this.count++;
      },
      error: (e) => {
        this.mensajes += 'Error: ' + e.message;
      },
      complete: () => {
        this.mensajes += 'Completado';
      }
    });

    // sub.unsubscribe();
  }
  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
      this.sub = undefined;
    }
  }

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

  /** version observables */
  consultar(): void {
    this.cargando = true;
    const obs$ = this.pizzaService.getPizzas();

    obs$.subscribe({
      next: (d) => {
        this.pizzas = d ?? [];
        this.error = '';
      },
      error: (e) => {
        this.error = e.message;
        console.error(e);
      },
      complete: () => {
        this.cargando = false;
      }
    });

    // hay que desubscribser para observables de larga duracion
    // sub.unsubscribe();
  }

  // version con promesas
  // consultar(): void {
  //   this.cargando = true;
  //   this.pizzaService
  //     .getPizzas()
  //     .then((data) => {
  //       this.pizzas = data ?? [];
  //       this.error = '';
  //     })
  //     .catch((e) => {
  //       this.error = e.message;
  //       console.error(e);
  //     })
  //     .finally(() => {
  //       this.cargando = false;
  //     });
  // }
}
