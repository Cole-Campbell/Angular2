import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryList',
})
export class CategoryListPipe {
  //Sets up local array and adds categories. Comma seperator.
  transform(mediaItems){
    var categories = [];
    mediaItems.forEach(mediaItem => {
      if (categories.indexOf(mediaItem.category) <= -1) {
        categories.push(mediaItem.category);
      }
    });
    return categories.join(', ');
  }
}