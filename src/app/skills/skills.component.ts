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

  database: Badge[] = [
    { color: '003545', name: 'mariadb', icon: 'mariadb', site: 'https://mariadb.org' },
    { color: '4479A1', name: 'mysql', icon: 'mysql', site: 'https://mysql.com' },
    { color: '47A248', name: 'mongodb', icon: 'mongodb', site: 'https://mongodb.com' },
    { color: '003B57', name: 'sqlite', icon: 'sqlite', site: 'https://sqlite.org' },
  ];

  ops: Badge[] = [
    { color: 'EE0000', name: 'ansible', icon: 'ansible', site: 'https://www.ansible.com/' },
    { color: 'D22128', name: 'apache', icon: 'apache', site: 'https://apache.org' },
    { color: 'C71A36', name: 'apache%20maven', icon: 'apachemaven', site: 'https://maven.apache.org' },
    { color: 'F8DC75', name: 'apache%20tomcat', icon: 'apachetomcat', site: 'https://tomcat.apache.org' },
    { color: '064F8C', name: 'cmake', icon: 'cmake', site: 'https://cmake.org' },
    { color: 'F05032', name: 'git', icon: 'git', site: 'https://git-scm.com/' },
    { color: '181717', name: 'github', icon: 'github', site: 'https://github.com' },
    {
      color: '2088FF',
      name: 'github%20actions',
      icon: 'github%20actions',
      site: 'https://github.com/features/actions',
    },
    { color: 'F46800', name: 'grafana', icon: 'grafana', site: 'https://grafana.com/' },
    { color: 'D24939', name: 'jenkins', icon: 'jenkins', site: 'https://www.jenkins.io' },
    { color: 'D22128', name: 'jmeter', icon: 'apachejmeter', site: 'https://jmeter.apache.org/' },
    { color: '7D64FF', name: 'k6', icon: 'k6', site: 'https://k6.io' },
    { color: '009639', name: 'nginx', icon: 'nginx', site: 'https://nginx.org' },
    { color: '000000', name: 'markdown', icon: 'markdown', site: 'https://markdownguide.org' },
    { color: 'FF6C37', name: 'postman', icon: 'postman', site: 'https://postman.com' },
    { color: 'E6522C', name: 'prometheus', icon: 'prometheus', site: 'https://prometheus.io/' },
    { color: '24A1C1', name: 'traefik', icon: 'traefikproxy', site: 'https://traefik.io/' },
  ];

  container: Badge[] = [
    { color: '2496ED', name: 'docker', icon: 'docker', site: 'https://docker.com/' },
    { color: '892CA0', name: 'podman', icon: 'podman', site: 'https://podman.io' },
    { color: '0F1689', name: 'helm', icon: 'helm', site: 'https://helm.sh/' },
    { color: '326CE5', name: 'kubernetes', icon: 'kubernetes', site: 'https://kubernetes.io/' },
  ];

  operatingSystems: Badge[] = [
    { color: '0D1016', name: 'linux', icon: 'linux', site: 'https://linux.org/' },
    { color: '5277C3', name: 'nixos', icon: 'nixos', site: 'https://nixos.org' },
    { color: 'A81D33', name: 'debian', icon: 'debian', site: 'https://debian.org' },
    { color: 'E95420', name: 'ubuntu', icon: 'ubuntu', site: 'https://ubuntu.com' },
    { color: '51A2DA', name: 'fedora', icon: 'fedora', site: 'https://fedoraproject.org' },
    { color: '1793D1', name: 'arch%20linux', icon: 'archlinux', site: 'https://archlinux.org' },
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
