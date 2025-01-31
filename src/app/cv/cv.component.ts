import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-cv',
  imports: [ButtonModule, DialogModule],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CVComponent {
  visible = false;

  showDialog() {
    this.visible = true;
  }
}
