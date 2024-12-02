import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  @Input() users: User[] = [];  // Receive the list of users from the parent component
  @Output() userDeleted = new EventEmitter<User>(); // Event to notify the parent component about the deleted user

  // Method to delete a user when the name is clicked
  deleteUser(user: User): void {
    this.userDeleted.emit(user); // Emit the deleted user to the parent component
  }
}
