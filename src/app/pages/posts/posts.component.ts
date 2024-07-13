import { Component } from '@angular/core';
import { PostsService } from './services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  private userId$ = this.route.queryParams.pipe(
    map((filter) => {
      if(filter && filter['userId']) {
        return filter['userId']
      }

      return null
    })
  )
  public posts$ = this.userId$.pipe(
    switchMap((userId) => this.postsService.getPosts(userId))
  )

  constructor(private postsService: PostsService, private route: ActivatedRoute) { }
}
