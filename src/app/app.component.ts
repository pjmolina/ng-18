import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { User } from './dominio/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app0';

  lista: User[] = [
    {
      name: 'Jesica',
      surname: 'Alba',
    },
    {
      name: 'Pablo',
      surname: 'Sanchez',
    },
    {
      name: 'Lucia',
      surname: 'Garcia',
    },
  ];

  selectedUser(user: User) {
    //console.log('Se seleciono ' + user.name + ' ' + user.surname);
    console.log(`Se seleciono ${user.name} ${user.surname}`);
  }
}
