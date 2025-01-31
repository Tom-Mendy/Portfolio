import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { LanguageIconComponent } from '../language-icon/language-icon.component';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { svglGithubLight } from '@ng-icons/svgl';

export interface Root {
  data: Data;
}

export interface Data {
  user: User;
}

export interface User {
  pinnedItems: PinnedItems;
}

export interface PinnedItems {
  nodes: Node[];
}

export interface Node {
  name: string;
  description: string;
  primaryLanguage: { name: string };
  url: string;
  stargazerCount: number;
  repositoryTopics: { nodes: { topic: { name: string } }[] };
}

@Component({
  selector: 'app-github',
  imports: [CommonModule, NgIcon, LanguageIconComponent],
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  viewProviders: [provideIcons({ svglGithubLight })],
})
export class GithubComponent implements OnInit {
  pinnedItems!: PinnedItems;
  errorMessage = '';

  private readonly GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql';
  private readonly GITHUB_TOKEN = environment.GITHUB_TOKEN;
  private readonly OWNER = 'Tom-Mendy';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPinnedRepos();
  }

  private fetchPinnedRepos(): void {
    const query = `
      query {
      user(login: "${this.OWNER}") {
        pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
          name
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

    this.http.post<Root>(this.GITHUB_GRAPHQL_URL, { query }, { headers }).subscribe({
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
