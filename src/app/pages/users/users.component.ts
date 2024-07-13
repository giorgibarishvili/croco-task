import { Component } from '@angular/core';
import { UserServiceService } from './services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  users$ = this.userService.getUsers();

  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}

  public onPostsView(userId: number): void {
    this.router.navigate(['posts'], {
      queryParams: { userId },
    });
  }
  public onTodoView(userId: number): void {
    this.router.navigate(['todo'], {
      queryParams: { userId },
    });
  }
}
