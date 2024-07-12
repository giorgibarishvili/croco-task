import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { TableModule } from 'primeng/table';
import { UserServiceService } from './services/user-service.service';
import { UsernamePipe } from './pipes/username.pipe';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [UsersComponent, UsernamePipe],
  imports: [CommonModule, UsersRoutingModule, TableModule, ButtonModule],
  providers: [UserServiceService],
})
export class UsersModule {}
