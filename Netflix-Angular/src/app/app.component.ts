import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menuOpened = false;

  listTitles = [{
    trailer:'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover:'assets/images/guardios-da-galaxia.jpg',
    name:'Guardiões da Galaxia 1',
    relevance:98,
    age:0,
    parts: 2,
    categories: ['Épico', 'Filme de fantasia','Viagem no tempo']
  },
  {
    trailer:'assets/videos/capitao_america_guerra_civil_1080p.mp4',
    cover:'assets/images/capitao-america-o-primeiro-vingador.jpg',
    name:'Capitão América',
    relevance:80,
    age:12,
    parts: 2,
    categories: ['Épico', 'Filme de fantasia','Ação']
  },
  {
    trailer:'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover:'assets/images/homem-de-ferro-2.jpg',
    name:'Guardiões da Galaxia 3',
    relevance:55,
    age:18,
    parts: 2,
    categories: ['Épico', 'Filme de fantasia','Viagem no tempo']
  },
  {
    trailer:'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover:'assets/images/eu-sou-a-lenda.jpg',
    name:'Guardiões da Galaxia 3',
    relevance:55,
    age:18,
    parts: 2,
    categories: ['Épico', 'Filme de fantasia','Viagem no tempo']
  }

]

setMenuState(state:boolean){
  this.menuOpened = state;
}

closeMenu(){
  this.menuOpened = false;
}
}
