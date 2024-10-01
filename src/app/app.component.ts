import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { User } from './dominio/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app0';

  selectedUser(user: User) {
    //console.log('Se seleciono ' + user.name + ' ' + user.surname);
    console.log(`Se seleciono ${user.name} ${user.surname}`);
  }
}
