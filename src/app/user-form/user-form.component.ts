import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../models/user.model';
// Import the User class

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userName: string = '';
  password: string = '';

  @Output() userAdded = new EventEmitter<{ userName: string, password: string }>();  // Emit user data to parent

  // Method to handle form submission
  handleUserFormSubmit() {
    if (this.userName && this.password) {
      this.userAdded.emit({ userName: this.userName, password: this.password });  // Emit the user data
      this.userName = '';  // Clear input fields
      this.password = '';
    } else {
      alert("Please fill in both fields.");
    }
  }
}
