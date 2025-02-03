import { Component, Input } from '@angular/core';
import { Node } from '../pinned-items';
import { DataView } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { SelectButton } from 'primeng/selectbutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { LanguageIconComponent } from '../../language-icon/language-icon.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { svglGithubLight } from '@ng-icons/svgl';
import { heroStarSolid } from '@ng-icons/heroicons/solid';
import { NgOptimizedImage } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    DataView,
    ButtonModule,
    CommonModule,
    SelectButton,
    FormsModule,
    DataViewModule,
    LanguageIconComponent,
    NgIcon,
    NgOptimizedImage,
  ],
  selector: 'app-display-repo',
  templateUrl: './display-repo.component.html',
  styleUrl: './display-repo.component.css',
  viewProviders: [provideIcons({ svglGithubLight, heroStarSolid })],
})
export class DisplayRepoComponent {
  @Input() products: Node[] = [];

  layout: 'list' | 'grid' = 'grid';

  options = ['list', 'grid'];
}
