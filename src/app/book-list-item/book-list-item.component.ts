import { Component, Input } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-list-item',
  templateUrl: './book-list-item.component.html',
  standalone: false,
  styleUrl: './book-list-item.component.css'
})
export class BookListItemComponent {
  @Input() book?: Book;
}
