import { DownloadFileService } from './../../download-file.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit, OnDestroy {
  constructor(private DownloadFileService: DownloadFileService) {}
  public downloadFile(): void {
    this.DownloadFileService.downloadFile().subscribe((Response) => {
      let fileName = Response.headers
        .get('content-disposition')
        ?.split(';')[1]
        .split('=')[1];
      let blob: Blob = Response.body as Blob;
      let a = document.createElement('a');
      window.open(
        '../../../assets/Lucas Escoto da Luz - Curriculo Atualizado.pdf'
      );
      a.click();
    });
  }

  timerSubs!: Subscription;

  @Input() imagens: string[] = [];

  private _indexImagemAtiva: number = 0;
  get indexImagemAtiva() {
    return this._indexImagemAtiva;
  }

  set indexImagemAtiva(value: number) {
    this._indexImagemAtiva = value < this.imagens.length ? value : 0;
  }

  ngOnInit(): void {
    this.iniciarTimer();
  }

  ngOnDestroy(): void {
    this.pararTimer();
  }

  iniciarTimer(): void {
    this.timerSubs = timer(2000).subscribe(() => {
      this.ativarImagem(this.indexImagemAtiva + 1);
    });
  }

  pararTimer(): void {
    this.timerSubs?.unsubscribe();
  }

  ativarImagem(index: number): void {
    this.indexImagemAtiva = index;
    this.iniciarTimer();
  }
}
