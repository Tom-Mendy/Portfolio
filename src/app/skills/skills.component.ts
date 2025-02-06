import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
import { Badge } from './badge';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SkeletonModule, NgOptimizedImage],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Programming Languages 🔧',
      items: [
        { color: '4EAA25', name: 'bash', icon: 'gnubash', site: 'https://gnu.org/software/bash', load: false },
        {
          color: 'A8B9CC',
          name: 'c',
          icon: 'c',
          site: 'https://en.wikipedia.org/wiki/C_(programming_language)',
          load: false,
        },
        { color: '00599C', name: 'c++', icon: 'c%2B%2B', site: 'https://en.wikipedia.org/wiki/C%2B%2B', load: false },
        { color: '00ADD8', name: 'go', icon: 'go', site: 'https://go.dev', load: false },
        { color: '5D4F85', name: 'haskell', icon: 'haskell', site: 'https://haskell.org', load: false },
        { color: '000000', name: 'java', icon: 'openjdk', site: 'https://java.com', load: false },
        { color: '777BB4', name: 'php', icon: 'php', site: 'https://php.net', load: false },
        { color: '3776AB', name: 'python', icon: 'python', site: 'https://python.org', load: false },
      ],
    },
    {
      title: 'Web Development 🌐',
      items: [
        { color: 'E34F26', name: 'html', icon: 'html5', site: 'https://en.wikipedia.org/wiki/HTML', load: false },
        { color: '663399', name: 'css', icon: 'css', site: 'https://en.wikipedia.org/wiki/CSS', load: false },
        {
          color: 'F7DF1E',
          name: 'javascript',
          icon: 'javascript',
          site: 'https://en.wikipedia.org/wiki/JavaScript',
          load: false,
        },
        {
          color: '3178C6',
          name: 'typescript',
          icon: 'typescript',
          site: 'https://www.typescriptlang.org',
          load: false,
        },
        { color: '5FA04E', name: 'node%20js', icon: 'nodedotjs', site: 'https://nodejs.org', load: false },
        { color: '0F0F11', name: 'angular', icon: 'angular', site: 'https://angular.io', load: false },
        { color: '000000', name: 'express', icon: 'express', site: 'https://expressjs.com', load: false },
        { color: 'FF2D20', name: 'laravel', icon: 'laravel', site: 'https://laravel.com', load: false },
        { color: '61DAFB', name: 'react', icon: 'react', site: 'https://react.dev', load: false },
        { color: '000000', name: 'next.js', icon: 'next.js', site: 'https://nextjs.org', load: false },
        { color: '6DB33F', name: 'spring', icon: 'spring', site: 'https://spring.io', load: false },
      ], // Your web development array
    },
    {
      title: 'Database 💽',
      items: [
        { color: '003545', name: 'mariadb', icon: 'mariadb', site: 'https://mariadb.org', load: false },
        { color: '4479A1', name: 'mysql', icon: 'mysql', site: 'https://mysql.com', load: false },
        { color: '47A248', name: 'mongodb', icon: 'mongodb', site: 'https://mongodb.com', load: false },
        { color: '003B57', name: 'sqlite', icon: 'sqlite', site: 'https://sqlite.org', load: false },
      ],
    },
    {
      title: 'Ops ⚙️',
      items: [
        { color: 'EE0000', name: 'ansible', icon: 'ansible', site: 'https://www.ansible.com/', load: false },
        { color: 'D22128', name: 'apache', icon: 'apache', site: 'https://apache.org', load: false },
        { color: 'C71A36', name: 'apache%20maven', icon: 'apachemaven', site: 'https://maven.apache.org', load: false },
        {
          color: 'F8DC75',
          name: 'apache%20tomcat',
          icon: 'apachetomcat',
          site: 'https://tomcat.apache.org',
          load: false,
        },
        { color: '064F8C', name: 'cmake', icon: 'cmake', site: 'https://cmake.org', load: false },
        { color: 'F05032', name: 'git', icon: 'git', site: 'https://git-scm.com/', load: false },
        { color: '181717', name: 'github', icon: 'github', site: 'https://github.com', load: false },
        {
          color: '2088FF',
          name: 'github%20actions',
          icon: 'github%20actions',
          site: 'https://github.com/features/actions',
          load: false,
        },
        { color: 'F46800', name: 'grafana', icon: 'grafana', site: 'https://grafana.com/', load: false },
        { color: 'D24939', name: 'jenkins', icon: 'jenkins', site: 'https://www.jenkins.io', load: false },
        { color: 'D22128', name: 'jmeter', icon: 'apachejmeter', site: 'https://jmeter.apache.org/', load: false },
        { color: '7D64FF', name: 'k6', icon: 'k6', site: 'https://k6.io', load: false },
        { color: '009639', name: 'nginx', icon: 'nginx', site: 'https://nginx.org', load: false },
        { color: '000000', name: 'markdown', icon: 'markdown', site: 'https://markdownguide.org', load: false },
        { color: 'FF6C37', name: 'postman', icon: 'postman', site: 'https://postman.com', load: false },
        { color: 'E6522C', name: 'prometheus', icon: 'prometheus', site: 'https://prometheus.io/', load: false },
        { color: '24A1C1', name: 'traefik', icon: 'traefikproxy', site: 'https://traefik.io/', load: false },
      ],
    },
    {
      title: 'Container 🚢',
      items: [
        { color: '2496ED', name: 'docker', icon: 'docker', site: 'https://docker.com/', load: false },
        { color: '892CA0', name: 'podman', icon: 'podman', site: 'https://podman.io', load: false },
        { color: '0F1689', name: 'helm', icon: 'helm', site: 'https://helm.sh/', load: false },
        { color: '326CE5', name: 'kubernetes', icon: 'kubernetes', site: 'https://kubernetes.io/', load: false },
      ],
    },
    {
      title: 'Operating System 💻',
      items: [
        { color: '0D1016', name: 'linux', icon: 'linux', site: 'https://linux.org/', load: false },
        { color: '5277C3', name: 'nixos', icon: 'nixos', site: 'https://nixos.org', load: false },
        { color: 'A81D33', name: 'debian', icon: 'debian', site: 'https://debian.org', load: false },
        { color: 'E95420', name: 'ubuntu', icon: 'ubuntu', site: 'https://ubuntu.com', load: false },
        { color: '51A2DA', name: 'fedora', icon: 'fedora', site: 'https://fedoraproject.org', load: false },
        { color: '1793D1', name: 'arch%20linux', icon: 'archlinux', site: 'https://archlinux.org', load: false },
      ],
    },
  ];

  public generateBadgeUrl(item: Badge): string {
    return `https://img.shields.io/badge/${item.name}-${item.color}?style=for-the-badge&logo=${item.icon}&logoColor=white`;
  }

  onImageLoad(item: Badge): void {
    item.load = true;
  }
}
