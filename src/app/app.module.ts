import { DownloadFileService } from './download-file.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componente/cabecalho/cabecalho.component';
import { RodapeComponent } from './componente/rodape/rodape.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { ProjetosComponent } from './componente/projetos/projetos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmailService } from './email.service';
import { NgImageSliderModule } from 'ng-image-slider';
import { CarouselComponent } from "./componente/projetos/carousel.component";
import { CurriculoComponent } from "./componente/curriculo/curriculo.component";

@NgModule({
    declarations: [
        AppComponent,
        CabecalhoComponent,
        RodapeComponent,
        InicioComponent,
        ProjetosComponent,
        CurriculoComponent
    ],
    providers: [DownloadFileService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgImageSliderModule,

    ]
})
export class AppModule { }
