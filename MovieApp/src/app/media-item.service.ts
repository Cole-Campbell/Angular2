import { Injectable } from '@angular/core';

@Injectable()
export class MediaItemService {
  get() {
    return this.mediaItems;
  }
  add(mediaItem){
    this.mediaItems.push(mediaItem);
  }

  delete(mediaItem){
    let index = this.mediaItems.indexOf(mediaItem);
    if(index >= 0){
      this.mediaItems.splice(index, 1);
    }
  }
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
