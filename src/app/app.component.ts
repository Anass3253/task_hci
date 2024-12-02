import { Component } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: User[] = [
    new User("anas", "123456"),
    new User("omar", "123456"),
    new User("ahmed", "123456")
  ];  // Store users here
  
  // Method to add a new user
  addUser(userName: string, password: string) {
    // Check if the username already exists
    const userExists = this.users.some(user => user.userName === userName);

    if (userExists) {
      alert("Username already exists. Please choose a different name.");
    } else if (userName && password) {
      const newUser = new User(userName, password);
      this.users.push(newUser);  // Add new user to the list
    } else {
      alert("Please fill in both fields.");
    }
  }

  // Method to handle user deletion
  handleUserDeletion(user: User): void {
    // Filter out the deleted user from the list
    this.users = this.users.filter(u => u !== user);
  }
}
