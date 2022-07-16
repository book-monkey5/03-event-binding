import { Component } from '@angular/core';
/*BS*/import { Book } from './shared/book';/*BE*/

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*BS*/book: Book | null = null;

  showList() {
    this.book = null;
  }

  showDetails(book: Book) {
    this.book = book;
  }/*BE*/
}
