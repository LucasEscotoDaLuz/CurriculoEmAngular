import { SlideInterface } from './componente/imageSlider/types/slide.interface';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  slides: SlideInterface[] = [
    { url: '../assets/copas-do-mundo.png', title:'projeto copa do mundo' },
    { url: '../assets/curriculo-html.png', title:'projeto currículo'},
    { url: '../assets/jogo-forca.png', title: 'projeto jogo da forca' },
    { url: '../assets/jogo-friends.png', title:'projeto jogo friends'},
    { url: '../assets/lucasflix.png', title:'projeto lucasflix'},
    { url: '../assets/portfolio.png', title: 'projeto portfólio'},
    { url: '../assets/projeto-faculdade-2.png', title:'projeto faculdade'},
    { url: '../assets/projeto-faculdade.png', title:'projeto faculdade'},
    { url: '../assets/wforms-mysql.png', title:'projeto windows forms'}
  ];
// export class AppComponent {
//   title = 'CurriculoEmAngular';

//   slides: SlideInterface [] [

//     { url: '/assets/image-1.jpeg', title: 'beach' },
//     { url: '/assets/image-2.jpeg', title: 'boat' },
//     { url: '/assets/image-3.jpeg', title: 'forest' },
//     { url: '/assets/image-4.jpeg', title: 'city' },
//     { url: '/assets/image-5.jpeg', title: 'italy' },
//     // {url: '../assets/copas-do-mundo.png', title:'projeto copa do mundo'};
//     // {url: '../assets/curriculo-html.png', title:'projeto currículo'};
//     // {url: '../assets/jogo-forca.png', title: 'projeto jogo da forca'};
//     // {url: '../assets/jogo-friends.png', title:'projeto jogo friends'};
//     // {url: '../assets/jogo-python.png', title: 'projeto jogo python'};
//     // {url: '../assets/lucasflix.png', title:'projeto lucasflix'};
//     // {url: '../assets/portfolio.png', title: 'projeto portfólio'};
//     // {url: '../assets/projeto-faculdade-2.png', title:'projeto faculdade'};
//     // {url: '../assets/projeto-faculdade.png', title:'projeto faculdade'};
//     // {url: '../assets/wforms-mysql.png', title:'projeto windows forms'}
//   ];



}
