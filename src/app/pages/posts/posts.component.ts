import { Component } from '@angular/core';
import { PostsService } from './services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  public posts$ = this.postsService.getPosts()

  constructor(private postsService: PostsService, private route: Router) { }
}
