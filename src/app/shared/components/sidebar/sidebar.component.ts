import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  public get tagsHistory(): string[] {
    return this.gifsService.tagsHistory;
  }

  constructor(private gifsService: GifsService) {}

  public search(tag: string ) {
    this.gifsService.searchTag(tag);
  }

}
