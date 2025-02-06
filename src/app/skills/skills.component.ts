// skills.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
import { Badge } from './badge';

const README_KEY = makeStateKey<string>('readmeContent');

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SkeletonModule], // Add CommonModule to imports
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  readmeContent: SafeHtml = '';
  programmingLanguage: Badge[] = [
    { color: '4EAA25', name: 'bash', icon: 'gnubash', site: 'https://gnu.org/software/bash' },
    { color: 'A8B9CC', name: 'c', icon: 'c', site: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
    { color: '00599C', name: 'c++', icon: 'c%2B%2B', site: 'https://en.wikipedia.org/wiki/C%2B%2B' },
    { color: '00ADD8', name: 'go', icon: 'go', site: 'https://go.dev' },
    { color: '5D4F85', name: 'haskell', icon: 'haskell', site: 'https://haskell.org' },
    { color: '000000', name: 'java', icon: 'openjdk', site: 'https://java.com' },
    { color: '777BB4', name: 'php', icon: 'php', site: 'https://php.net' },
    { color: '3776AB', name: 'python', icon: 'python', site: 'https://python.org' },
  ];

  webDevelopment: Badge[] = [
    { color: 'E34F26', name: 'html', icon: 'html5', site: 'https://en.wikipedia.org/wiki/HTML' },
    { color: '663399', name: 'css', icon: 'css', site: 'https://en.wikipedia.org/wiki/CSS' },
    { color: 'F7DF1E', name: 'javascript', icon: 'javascript', site: 'https://en.wikipedia.org/wiki/JavaScript' },
    { color: '3178C6', name: 'typescript', icon: 'typescript', site: 'https://www.typescriptlang.org' },
    { color: '5FA04E', name: 'node%20js', icon: 'nodedotjs', site: 'https://nodejs.org' },
    { color: '0F0F11', name: 'angular', icon: 'angular', site: 'https://angular.io' },
    { color: '000000', name: 'express', icon: 'express', site: 'https://expressjs.com' },
    { color: 'FF2D20', name: 'laravel', icon: 'laravel', site: 'https://laravel.com' },
    { color: '61DAFB', name: 'react', icon: 'react', site: 'https://react.dev' },
    { color: '000000', name: 'next.js', icon: 'next.js', site: 'https://nextjs.org' },
    { color: '6DB33F', name: 'spring', icon: 'spring', site: 'https://spring.io' },
  ];

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
