
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from "@ionic/storage";

import { Starwars} from '../../providers/starwars/starwars';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public obj: any;
  public heroes: any;
  dados: any;
  responseData: any;
  people: any;
  id_people: number;
  id_planet: number;
  data_planet: any;
  data_films: any;
  tamanho: any;
  page: any;
  
  constructor(public starwars: Starwars,
    public storage: Storage) {
    
  }

  getPeople() {
    this.starwars.getPeople(this.id_people)
      .then((result: any) => {    
        this.responseData = result;
        const dados = this.responseData;
  
        if (dados) {
          this.storage.set('dados', JSON.stringify(dados));
          this.people = dados;
          console.log(this.people);
        }

      })
      
  }

  getPlanet() {
    if(this.page == "" || this.page == undefined){
      this.page = 1
    }
    console.log("get_planet" + this.page) 
    this.starwars.getPlanet(this.page)
      .then((result: any) => {    
        this.responseData = result;
        const dados = this.responseData;
  
        if (dados) {
          this.storage.set('dados', (dados));
          this.data_planet = dados["results"];
          this.data_films = dados["results"][0]
          console.log(this.data_planet);
          console.log(this.data_films);
          this.tamanho = this.data_planet.length;
         
        }        

      })      
  }


/*
teste(){
  let filmes_por_planeta = {}
  for (let i = 0; i <10; i++) {
    let filmes = []
    for(let j = 0; j < 2; j++){
      filmes[j] = j
      console.log(j); 
    }
    filmes_por_planeta[i] = {filmes}
    console.log(i);     
}
console.log(filmes_por_planeta)
}
*/
proximo(){
this.page = this.page + 1
if(this.page > 7){
  alert("You've seen all the planets!")
  this.page = 7
}
console.log(this.page)
this.getPlanet()
}

anterior(){
this.page = this.page - 1
console.log(this.page)
this.getPlanet()
}
  


  id(id: any) {
    throw new Error("Method not implemented.");
  }




  ionViewWillEnter(){
  this.getPlanet()
 
  }

}