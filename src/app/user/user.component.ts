import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { User } from '../dominio/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements User, OnInit, OnChanges {
  @Input()
  name = '';
  @Input()
  surname = '';
  @Input()
  admin? = false;
  @Output()
  selectedUser = new EventEmitter<User>();

  constructor() {
    console.log(`constructor para ${this.name}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  // Hollywood Principle
  ngOnInit(): void {
    console.log(`Inicalizando el componente user para ${this.name}`);
  }

  pulsado(): void {
    console.log(`Pulsado. estamos aqui. ${this.name}`);

    this.selectedUser.emit({
      name: this.name,
      surname: this.surname,
      admin: this.admin
    });
  }
}
