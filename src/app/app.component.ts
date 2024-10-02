import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { User } from './dominio/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoggerV2Service } from './services/loger-v2.service';
import { CurrencyPipe } from './pipes/currency.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserComponent,
    CommonModule,
    FormsModule,
    CurrencyPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [LoggerV2Service]
})
export class AppComponent {
  title = 'app0';
  importe = 12000000.2344;

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

  constructor(private logger: LoggerV2Service) {}

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
}
