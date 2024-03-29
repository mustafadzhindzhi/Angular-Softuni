import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/theme.js';
import { Post } from './types/post.js';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getThemes() {
    const { apiUrl } = environment;

    return this.http.get<Theme>(`${apiUrl}/themes`) //localhost/api/themes
  }

  getPosts(limit?: number) {
    const { apiUrl } = environment;

    let url = `${apiUrl}/posts`
    if (limit) {
      url += `?limit=${limit}`
    }

    return this.http.get<Post[]>(url)
  }
}
