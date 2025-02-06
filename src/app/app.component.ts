import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DividerModule } from 'primeng/divider';
import { GithubComponent } from './github/github.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactComponent, DividerModule, GithubComponent, SkillsComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Portfolio';

  name = 'Tom Mendy';
}
