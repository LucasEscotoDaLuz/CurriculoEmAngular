import { DownloadFileService } from './../../download-file.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor(private DownloadFileService: DownloadFileService) {}
  public downloadFile(): void {
    this.DownloadFileService.downloadFile()
    .subscribe(Response => {
      let fileName=Response.headers.get('content-disposition')
      ?.split(';') [1].split('=')[1];
      let blob:Blob=Response.body as Blob;
      let a = document.createElement('a');
      window.open('../../../assets/Lucas Escoto da Luz - Curriculo Atualizado.pdf');
      a.click();
    })
  }
}
