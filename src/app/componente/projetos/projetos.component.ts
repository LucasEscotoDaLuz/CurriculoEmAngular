import { Component, Input } from '@angular/core';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {

  @Input() images: ProjetosComponent [] = []

  selectIndex = 0;

  ngOnInit(): void { }

}
