import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PostsService } from './services/posts.service';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    CardModule,
    ButtonModule,
    DialogModule
  ],
  providers: [PostsService]
})
export class PostsModule { }
