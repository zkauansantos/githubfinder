import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { RepositoriesResponse } from '../../../interfaces/RepositoriesResponse';
import { GithubService } from '../../services/github/github.service';

export const resultsResolver: ResolveFn<RepositoriesResponse> = (route) => {
  const search = route.queryParams['searchTerm'];

  return inject(GithubService).getRepositories(search);
};
