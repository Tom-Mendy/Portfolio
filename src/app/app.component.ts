import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DividerModule } from 'primeng/divider';
import { GithubComponent } from './github/github.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactComponent, DividerModule, GithubComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Portfolio';

  name = 'Tom Mendy';
}
