import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../dominio/user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements User {
  @Input()
  name = '';
  @Input()
  surname = '';
  @Output()
  selectedUser = new EventEmitter<User>();

  pulsado(): void {
    console.log(`Pulsado. estamos aqui. ${this.name}`);

    this.selectedUser.emit({
      name: this.name,
      surname: this.surname,
    });
  }
}
