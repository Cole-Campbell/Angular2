import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})

export class MediaItemComponent {
  //Supports Property bindings with Input where item is equal to mediaItem

  //Find the first, and give it the alias of second one. Try not to use Alias
  @Input() mediaItem;

  //Set property to event emitter
  //() can have alias
  @Output() delete = new EventEmitter();


  onDelete(){
    //Can be called with argument for information to be sent back
    this.delete.emit(this.mediaItem);
  }



  /*name = 'The Redemption';

  wasWatched(){
    return true;
  }*/
}
