import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { TableModule } from 'primeng/table';
import { UserServiceService } from './services/user-service.service';
import { UsernamePipe } from './pipes/username.pipe';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent, UsernamePipe],
  imports: [CommonModule, UsersRoutingModule, TableModule, ButtonModule, IconFieldModule, InputIconModule, InputTextModule, ReactiveFormsModule],
  providers: [UserServiceService],
})
export class UsersModule {}
