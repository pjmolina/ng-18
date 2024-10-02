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
import { FormsModule } from '@angular/forms';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements User, OnInit, OnChanges {
  private _name = '';
  private _surname = '';

  @Input()
  get name(): string {
    return this._name;
  }
  set name(n: string) {
    if (n != this._name) {
      this._name = n;
      this.nameChange.emit(n);
    }
  }
  @Output()
  nameChange = new EventEmitter<string>();

  @Input()
  get surname(): string {
    return this._surname;
  }
  set surname(n: string) {
    if (n != this._surname) {
      this._surname = n;
      this.surnameChange.emit(n);
    }
  }

  @Output()
  surnameChange = new EventEmitter<string>();

  @Input()
  admin? = false;
  @Output()
  selectedUser = new EventEmitter<User>();

  constructor(private logger: LoggerService) {
    this.logger.log(`constructor para ${this.name}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logger.log(changes);
  }

  // Hollywood Principle
  ngOnInit(): void {
    this.logger.log(`Inicalizando el componente user para ${this.name}`);
  }

  pulsado(): void {
    this.logger.log(`Pulsado. estamos aqui. ${this.name}`);

    this.selectedUser.emit({
      name: this.name,
      surname: this.surname,
      admin: this.admin
    });
  }
}
