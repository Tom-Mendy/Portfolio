import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { CVComponent } from './cv/cv.component';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CVComponent, DividerModule, GithubComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  ngOnInit() {
    console.log('GITHUB_TOKEN=', process.env['GITHUB_TOKEN']);
  }

  name = 'Tom Mendy';
  email = 'tom.mendy@epitech.eu';
}
