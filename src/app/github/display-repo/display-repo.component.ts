import { Component, Input } from '@angular/core';
import { Node } from '../pinned-items';
import { DataView } from 'primeng/dataview';
import { Tag } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { SelectButton } from 'primeng/selectbutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';

@Component({
  standalone: true,
  imports: [DataView, ButtonModule, Tag, CommonModule, SelectButton, FormsModule, DataViewModule],
  selector: 'app-display-repo',
  templateUrl: './display-repo.component.html',
  styleUrl: './display-repo.component.css',
})
export class DisplayRepoComponent {
  @Input() products: Node[] = [];

  layout: 'list' | 'grid' = 'grid';

  options = ['list', 'grid'];

  getSeverity(product: Node): 'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast' | undefined {
    return 'success';
    // switch (product.inventoryStatus) {
    //   case 'INSTOCK':
    //     return 'success';
    //   case 'LOWSTOCK':
    //     return 'warn';
    //   case 'OUTOFSTOCK':
    //     return 'danger';
    //   default:
    //     return null;
    // }
  }
}
