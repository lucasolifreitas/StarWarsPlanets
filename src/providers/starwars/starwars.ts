import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Injectable()
export class Starwars {
  private API_URL = 'https://swapi.co/api/'

  constructor(public http: Http) { }
 


  getPeople(id: number) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'people/' + id + '/';

      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  getPlanet(page:any) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'planets/?page=' + page;

      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  getFilm(url_filme: string) {
    return new Promise((resolve, reject) => {
      let url = url_filme;
console.log(url)
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  
}
