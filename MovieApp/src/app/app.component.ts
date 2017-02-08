import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: './app.component.html',
  //CSS is scoped to the component. Can take an array of strings which means multiple CSS files.
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onMediaItemDelete(mediaItem){

  }

  /*Object Literal
  firstMediaItem = {
    id: 1,
    name: "Firebug",
    medium: "Series",
    category: "Science Fiction",
    year: 2010,
    watchedOn: null,
    isFavourite: false
  };*/
  title = 'Movie Watch List';
}

//Selectors should use - between words
