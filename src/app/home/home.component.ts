import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, AvatarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
