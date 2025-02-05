import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule, isPlatformServer } from '@angular/common';
import { PinnedItems } from './pinned-items';
import { PinnedRepo } from './pinned-repo';
import { DisplayRepoComponent } from './display-repo/display-repo.component';

@Component({
  selector: 'app-github',
  imports: [CommonModule, DisplayRepoComponent],
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
})
export class GithubComponent implements OnInit {
  pinnedItems!: PinnedItems;
  errorMessage = '';

  private readonly GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql';
  private GITHUB_TOKEN = '';
  private readonly OWNER = 'Tom-Mendy';

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private http: HttpClient,
  ) {
    if (isPlatformServer(this.platformId)) {
      this.GITHUB_TOKEN = process.env['GITHUB_TOKEN'] || '';
    }
  }

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      this.fetchPinnedRepos();
    }
  }

  private fetchPinnedRepos(): void {
    const query = `
      query {
      user(login: "${this.OWNER}") {
        pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
          name
          owner {
              login
            }
          description
          url
          stargazerCount
          primaryLanguage {
            name
          }
          repositoryTopics(first: 5) {
            nodes {
            topic {
              name
            }
            }
          }
          }
        }
        }
      }
      }
    `;

    const headers = new HttpHeaders({
      Authorization: `bearer ${this.GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    });

    this.http.post<PinnedRepo>(this.GITHUB_GRAPHQL_URL, { query }, { headers }).subscribe({
      next: (response) => {
        this.errorMessage = '';
        this.pinnedItems = response.data.user.pinnedItems;
      },
      error: (error) => {
        this.errorMessage = error;
        this.pinnedItems = { nodes: [] };
      },
    });
  }
}
