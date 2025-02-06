// skills.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/core';
import { CommonModule } from '@angular/common';

const README_KEY = makeStateKey<string>('readmeContent');

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule], // Add CommonModule to imports
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  readmeContent: SafeHtml = '';

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private transferState: TransferState,
  ) {}

  ngOnInit(): void {
    const cachedContent = this.transferState.get(README_KEY, '');

    if (cachedContent) {
      this.readmeContent = this.sanitizer.bypassSecurityTrustHtml(cachedContent);
    } else {
      this.fetchGithubReadme();
    }
  }

  private fetchGithubReadme(): void {
    this.http
      .get('https://raw.githubusercontent.com/Tom-Mendy/Tom-Mendy/main/README.md', {
        responseType: 'text',
      })
      .subscribe({
        next: (response) => {
          const content = this.sanitizer.bypassSecurityTrustHtml(response);
          this.transferState.set(README_KEY, response);
          this.readmeContent = content;
        },
        error: (error) => {
          console.error('Error fetching README:', error);
        },
      });
  }
}
