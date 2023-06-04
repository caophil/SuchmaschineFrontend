import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Eingabe } from '../dataclass/Eingabe';
import { firstValueFrom,Observable, throwError} from 'rxjs';
import { Result } from '../dataclass/Result';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent {

  constructor(private readonly router: Router,private http: HttpClient){}

  eingabe: string ="";
  results!: Result[];
  visible = true;

  async navigateLinkAdd(){
    this.router.navigate(['/linkAdd']);
  }

  async getResults(){
    var newEingabe: Eingabe = new Eingabe(this.eingabe);
    try {
      this.results = await firstValueFrom(this.http.post<Result[]>("http://localhost:3000/request", newEingabe));
      this.visible = true;
    } catch (error) {
      alert((error as Error).message)
    }

  }

}
