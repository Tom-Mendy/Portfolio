import { Component, Input, OnInit } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  svglC,
  svglCPlusplus,
  svglJava,
  svglPython,
  svglJavascript,
  svglTypescript,
  svglRuby,
  svglGolang,
  svglRust,
  svglKotlin,
  svglSwift,
  svglBash,
} from '@ng-icons/svgl';

@Component({
  selector: 'app-language-icon',
  imports: [NgIcon],
  standalone: true,
  templateUrl: './language-icon.component.html',
  styleUrl: './language-icon.component.css',
  viewProviders: [
    provideIcons({
      svglC,
      svglCPlusplus,
      svglJava,
      svglPython,
      svglJavascript,
      svglTypescript,
      svglRuby,
      svglGolang,
      svglRust,
      svglKotlin,
      svglSwift,
      svglBash,
    }),
  ],
})
export class LanguageIconComponent implements OnInit {
  @Input() language = '';

  public icon = '';

  ngOnInit(): void {
    switch (this.language) {
      case 'C':
        this.icon = 'svglC';
        break;
      case 'C++':
        this.icon = 'svglCPlusplus';
        break;
      case 'Java':
        this.icon = 'svglJava';
        break;
      case 'Python':
        this.icon = 'svglPython';
        break;
      case 'JavaScript':
        this.icon = 'svglJavascript';
        break;
      case 'TypeScript':
        this.icon = 'svglTypescript';
        break;
      case 'Ruby':
        this.icon = 'svglRuby';
        break;
      case 'Go':
        this.icon = 'svglGolang';
        break;
      case 'Rust':
        this.icon = 'svglRust';
        break;
      case 'Kotlin':
        this.icon = 'svglKotlin';
        break;
      case 'Swift':
        this.icon = 'svglSwift';
        break;
      case 'Shell':
        this.icon = 'svglBash';
        break;
      default:
        this.icon = 'svglGithubLight';
        break;
    }
  }
}
