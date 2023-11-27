import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { IGif } from '../../interfaces/SearchResponse';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  get gifsList(): IGif[] {
    return this.gifsService.gifsList;
  }

  constructor(private gifsService: GifsService) {
    
  }

}
