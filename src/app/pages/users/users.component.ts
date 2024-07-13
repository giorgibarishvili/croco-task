import { Component } from '@angular/core';
import { UserServiceService } from './services/user-service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, startWith, Subscription, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  form = new FormGroup({
    email: new FormControl(),
    name: new FormControl()
  })
  filter$ = this.form.valueChanges.pipe(
    debounceTime(300),
    startWith(null)
  )
  users$ = this.filter$.pipe(
    switchMap((filter) => this.userService.getUsers(filter))
  );
  subscription = new Subscription();

  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}

  // ngOnInit() {
  //   this.subscription.add(
  //     this.form.valueChanges.subscribe(
  //       value => {
  //         console.log(value)
  //       }
  //     )
  //   )
  // }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe()
  // }

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
