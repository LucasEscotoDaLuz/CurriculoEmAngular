import { SwiperModule } from './../../node_modules/swiper/types/shared.d';
import { DownloadFileService } from './download-file.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componente/cabecalho/cabecalho.component';
import { RodapeComponent } from './componente/rodape/rodape.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgImageSliderModule } from 'ng-image-slider';
import { CurriculoComponent } from "./componente/curriculo/curriculo.component";
import { CarrosselComponent } from './carrossel/carrossel.component';
import { ConhecimentosComponent } from './conhecimentos/conhecimentos.component';




@NgModule({
    declarations: [
        AppComponent,
        CabecalhoComponent,
        RodapeComponent,
        InicioComponent,
        CurriculoComponent,
        CarrosselComponent,
        ConhecimentosComponent,
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
