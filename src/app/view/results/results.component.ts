import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from 'src/app/services/github/github.service';
import { RepositoriesResponse } from 'src/interfaces/RepositoriesResponse';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
})
export class ResultsComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private githubService: GithubService
  ) {}

  repositories: RepositoriesResponse['items'] = [];
  totalCount = 0;
  currentPage = 1;
  isLoading = false;

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ results }) => {
      this.repositories = results.items;
      this.totalCount = results.items.length;
    });
  }

  searchChanged({ searchTerm }: { searchTerm: string }) {
    this.isLoading = true;
    this.githubService.getRepositories(searchTerm).subscribe({
      next: (results) => {
        this.repositories = results.items;
        this.totalCount = results.items.length;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }
}
