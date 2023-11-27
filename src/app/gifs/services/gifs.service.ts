import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGif, SearchResponse } from '../interfaces/SearchResponse';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifsList: IGif[]=[];
  
  private giphyUrl = "https://api.giphy.com/v1/gifs";
  private giphyApiKey = "6x1DZGE3N3Rx8XCkdnEyWANURHuBJWho";
  private _tagsHistory: string[] = [];

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  constructor(private http: HttpClient) {
    this._tagsHistory = JSON.parse( localStorage.getItem("tagsHistory") ?? "[]" );
   }

  private organizeHistory(tag: string){
    tag = tag.toLowerCase();

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter(t=>t!==tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,10);
    localStorage.setItem("tagsHistory", JSON.stringify(this._tagsHistory));

  }

  public searchTag(tag: string) {
    if(tag.length===0) return;

    this.organizeHistory(tag);

    const params = new HttpParams()
      .set("api_key", this.giphyApiKey)
      .set("limit", 20)
      .set("q", tag);
    this.http.get<SearchResponse>(`${this.giphyUrl}/search`, { params })
      .subscribe(resp => {
        console.log(resp);
        this.gifsList = resp.data;
      })
  }
}
