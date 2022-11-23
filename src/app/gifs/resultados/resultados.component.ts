import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import {Clipboard} from '@angular/cdk/clipboard'
import { Gif } from '../interfaceGifs/gifs.interface';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent {

  get resultados(){
    return this.gifsService.resultados;
  }

  copiar(event: Gif){
    this.clipboard.copy(event.images.downsized_medium.url)

  }

  constructor(private clipboard: Clipboard,private gifsService: GifsService){}

  

}
