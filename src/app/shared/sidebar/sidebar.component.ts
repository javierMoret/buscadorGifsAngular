import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../../app.component.css']
})
export class SidebarComponent {

  constructor(public gifsService: GifsService){}

  get historial(){
    return this.gifsService.historial;
  }


}
