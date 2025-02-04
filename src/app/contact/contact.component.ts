import { Component } from '@angular/core';
import { CVComponent } from '../cv/cv.component';

@Component({
  selector: 'app-contact',
  imports: [CVComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  email = 'tom.mendy@epitech.eu';

  github = 'Tom-Mendy';

  linkedin = 'tom-mendy';
}
