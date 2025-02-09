import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CVComponent } from './cv/cv.component';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  imports: [CVComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  email = environment.EMAIL;

  github = environment.GITHUB_USER;

  linkedin = environment.LINKEDIN_USER;

  showCopiedMessage = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  private showFeedback() {
    this.showCopiedMessage = true;
    setTimeout(() => (this.showCopiedMessage = false), 2000);
  }

  copyEmail(email: string): void {
    // Ensure the code only runs in the browser
    if (isPlatformBrowser(this.platformId)) {
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(email)
          .then(() => {
            console.log('Email copied to clipboard');
            // Optionally, display a success message to the user.
          })
          .catch((err) => {
            console.error('Error copying email: ', err);
          });
        this.showFeedback();
      } else {
        // Fallback method if Clipboard API isn't available
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand('copy');
          console.log('Email copied to clipboard (fallback)');
        } catch (err) {
          console.error('Fallback error copying email: ', err);
        }
        document.body.removeChild(textArea);
      }
    }
  }
}
