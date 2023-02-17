import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadFileService {

  constructor(private httpClient: HttpClient) { }

  public downloadFile() {
    return this.httpClient.get("../assets/Lucas Escoto da Luz - Curriculo Atualizado.pdf", {
      observe: 'response', responseType: 'blob'
    })
  }
}
