import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RepositoryComponent } from './repository/repository.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RepositoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Portfolio';
}
