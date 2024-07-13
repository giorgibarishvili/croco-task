import { Component } from '@angular/core';
import { TodoServiceService } from './services/todo-service.service';
import { map, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  private userId$ = this.route.queryParams.pipe(
    map((filter) => {
      if(filter && filter['userId']) {
        return filter['userId']
      }

      return null
    })
  )
  public todos$ = this.userId$.pipe(
    switchMap((userId) => this.todosService.getTodos(userId))
  )

  constructor(private todosService: TodoServiceService, private route: ActivatedRoute) { }
}
