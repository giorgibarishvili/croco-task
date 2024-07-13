import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../models/posts.model";
import { HttpClient, HttpParams } from "@angular/common/http";
import { URLS } from "../../../config/urls";

@Injectable()
export class PostsService {
    constructor(
        private http: HttpClient
    ) { }

    public getPosts(userId?: number): Observable<Post[]> {
        let params = new HttpParams();

        if(userId) {
            params = params.append('userId', userId)
        }

        return this.http.get<Post[]>(URLS.POSTS, { params })
    }
}