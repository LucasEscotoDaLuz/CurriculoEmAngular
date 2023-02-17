import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CurriculoEmAngular';

  images = [
    {
      imageSrc: '../assets/wforms-mysql.png',
      imageAlt: 'historiaCopa'
    },
    {
      imageSrc: '../assets/lucasflix.png',
      imageAlt: 'historiaCopa'
    },
    {
      imageSrc: '../assets/jogo-forca.png',
      imageAlt: 'historiaCopa'
    },
    {
      imageSrc: '../assets/copas-do-mundo.png',
      imageAlt: 'historiaCopa'
    },
    {
      imageSrc: '../assets/jogo-python.png',
      imageAlt: 'historiaCopa'
    },
    {
      imageSrc: '../assets/jogo-friends.png',
      imageAlt: 'historiaCopa'
    },
    {
      imageSrc: '../assets/projeto-faculdade-2.png',
      imageAlt: 'historiaCopa'
    },
    {
      imageSrc: '../assets/projeto-faculdade.png',
      imageAlt: 'historiaCopa'
    },
  ]
}
