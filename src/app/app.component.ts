import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { CVComponent } from './cv/cv.component';
import { DividerModule } from 'primeng/divider';
// import { PrimeNG } from 'primeng/config';
// import Aura from '@primeng/themes/aura';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CVComponent, DividerModule, GithubComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Portfolio';

  name = 'Tom Mendy';
  email = 'tom.mendy@epitech.eu';
}
