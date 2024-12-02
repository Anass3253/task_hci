export class User {
    private static currentId = 0; // Tracks the latest id
    id: number;
    userName: string;
    password: string; // Optional property
  
    constructor(userName: string, password: string) {
      this.id = User.generateId(); // Automatically assigns a unique id
      this.userName = userName;
      this.password = password;
    }
  
    private static generateId(): number {
      return ++this.currentId; // Increment and return the id
    }
  }
  