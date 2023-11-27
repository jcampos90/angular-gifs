import { Component, Input } from '@angular/core';
import { IGif } from '../../interfaces/SearchResponse';

@Component({
  selector: 'gifs-gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.css']
})
export class GifCardComponent {

  @Input()
  public gif!: IGif;

}
