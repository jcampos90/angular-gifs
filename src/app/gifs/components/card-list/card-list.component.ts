import { Component, Input } from '@angular/core';
import { IGif } from '../../interfaces/SearchResponse';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  @Input()
  public gifs: IGif[] = [];

}
