import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: './app.component.html',
  //CSS is scoped to the component. Can take an array of strings which means multiple CSS files.
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My App!';
}

//Selectors should use - between words
