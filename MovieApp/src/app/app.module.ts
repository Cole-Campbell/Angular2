import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { FavouriteDirective } from './favourite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { MediaItemService } from './media-item.service';

const lookupLists = {
  mediums: ['Movies', 'Series']
};

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavouriteDirective,
    CategoryListPipe,
    MediaItemFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    MediaItemService,
    { provide: 'lookupListToken', useValue: lookupLists }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
