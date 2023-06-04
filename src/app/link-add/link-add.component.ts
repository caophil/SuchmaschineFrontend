import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Link } from '../dataclass/Link';
import { firstValueFrom,Observable, throwError} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';



@Component({
  selector: 'app-link-add',
  templateUrl: './link-add.component.html',
  styleUrls: ['./link-add.component.scss']
})
export class LinkAddComponent {

  constructor(private readonly router: Router,
    private http: HttpClient
    ){}

  url: string = "";


  async navigateLinkAdd(){
    this.router.navigate(['main']);
  }

  async addLink(){
    var newLink: Link = new Link(this.url);
    try {
      const result = await firstValueFrom(this.http.post<any>("http://localhost:3000/links", newLink));
      this.url = "";
      alert("URL wurde hinzugrfügt!")
    } catch (error) {
      alert((error as Error).message)
      
    }
  }

}
