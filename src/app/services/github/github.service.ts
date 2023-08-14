import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RepositoriesResponse } from 'src/interfaces/RepositoriesResponse';

@Injectable()

export class GithubService {
  url: string = 'https://api.github.com/search/repositories?q=';

  constructor(private http: HttpClient) {}

  getDataFromGithub(query: string) {
    return this.http.get<RepositoriesResponse>(
      `${this.url}${query}&per_page=100`
    );
  }
}
