import { Component } from '@angular/core';
import { UserServiceService } from './services/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  users$ = this.userService.getUsers();

  constructor(private userService: UserServiceService) {
    // userService.getUsers()
    // .subscribe(e => console.log(e))
  }
}
