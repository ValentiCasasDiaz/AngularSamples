import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User, UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = '7-ServicesLesson';

  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.updateUsers()
  }

  onAddRandomUser(): void {
    this.userService.createRandomUser();
    this.updateUsers();
  }

  onIncreaseUserAge(user: User): void {
    this.userService.updateUserAge(user.id, user.age + 1);
    this.updateUsers();
  }

  onDecreaseUserAge(user: User): void {
    this.userService.updateUserAge(user.id, user.age - 1);
    this.updateUsers();
  }

  onDeleteUser(user: User): void {
    // Borramos en el service el usuario
    this.userService.deleteUser(user.id);

    // Volvemos a pedir los usuarios
    this.updateUsers()
  }

  updateUsers(): void {
    this.users = this.userService.getUsers();
  }
}
