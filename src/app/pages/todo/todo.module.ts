import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoServiceService } from './services/todo-service.service';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,TableModule
  ],
  providers: [TodoServiceService]

})
export class TodoModule { }
