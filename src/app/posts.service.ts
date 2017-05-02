import 'rxjs/add/operator/map';

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts() {
    return this.http.get('/api/posts')
      .map(res => res.json());
  }
}
