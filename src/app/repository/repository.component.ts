import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-repository',
  imports: [],
  templateUrl: './repository.component.html',
  styleUrl: './repository.component.css'
})
export class RepositoryComponent implements OnInit {




  public repoContent: string;

  constructor(
    public http: HttpClient
  ) {
    console.log('RepositoryComponent created');
    this.repoContent = '';
  }

  ngOnInit(): void {
    this.http.get('https://raw.githubusercontent.com/Tom-Mendy/dotfiles/refs/heads/main/README.md', { responseType: 'text' })
      .subscribe({
        next: (res) => {
          this.repoContent = res;
        },
        error: (err) => {
          console.log(err);
        }
      });
  }


}
