import { Component } from '@angular/core';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent {

  onMediaItemDelete(mediaItem){ }

  mediaItems = [
    {
      id: 1,
      name: "Baby Jane",
      medium: "Movies",
      category: "Thriller",
      year: 1960,
      watchedOn: "11/12/2016",
      isFavourite: true
    },
    {
      id: 1,
      name: "Rupauls Drag Race",
      medium: "Series",
      category: "Drama",
      year: 2011,
      watchedOn: null,
      isFavourite: false
    },
    {
      id: 1,
      name: "Archer",
      medium: "Series",
      category: "Action",
      year: 2011,
      watchedOn: null,
      isFavourite: false
    }
  ];

}
