import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Eingabe } from '../dataclass/Eingabe';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent {

  constructor(private readonly router: Router,private http: HttpClient){}

  eingabe: string ="";

  async navigateLinkAdd(){
    this.router.navigate(['/linkAdd']);
  }

  async getResults(){
    var newEingabe: Eingabe = new Eingabe(this.eingabe);

  }

}
