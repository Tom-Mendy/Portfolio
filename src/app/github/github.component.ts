import { Component, Inject, OnInit, TransferState, makeStateKey } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PinnedItems } from './pinned-items';
import { DisplayRepoComponent } from './display-repo/display-repo.component';

// Unique key to identify transferred data
const PINNED_REPOS_KEY = makeStateKey<PinnedItems>('pinnedRepos');

@Component({
  selector: 'app-github',
  imports: [CommonModule, DisplayRepoComponent],
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
})
export class GithubComponent implements OnInit {
  public pinnedItems: PinnedItems = { nodes: [] };

  constructor(
    private http: HttpClient,
    @Inject(TransferState) private transferState: TransferState,
  ) {}

  ngOnInit(): void {
    this.fetchPinnedRepos();
  }

  private fetchPinnedRepos(): void {
    this.http.get<PinnedItems>('/github').subscribe({
      next: (response) => {
        this.pinnedItems = response;
        this.transferState.set(PINNED_REPOS_KEY, this.pinnedItems);
      },
      error: (error) => {
        console.error('Error fetching pinned repos:', error);
      },
    });
  }
}
