import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { User } from './dominio/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app0';

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

  selectedUser(user: User) {
    //console.log('Se seleciono ' + user.name + ' ' + user.surname);
    console.log(`Se seleciono ${user.name} ${user.surname}`);
  }

  cambiaNombre(): void {
    this.lista[0].name = 'Alicia';
    this.lista[0].surname = 'Keys';
  }

  toJson(obj: unknown): string {
    return JSON.stringify(obj, null, 2);
  }
}
