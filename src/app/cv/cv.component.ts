import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [ButtonModule, DialogModule, NgOptimizedImage],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CVComponent {
  visible = false;

  showDialog() {
    console.log('showDialog');
    this.visible = true;
  }

  cvUrl = '/assets/CV.jpg';
  cvAlt = 'my CV';
}
