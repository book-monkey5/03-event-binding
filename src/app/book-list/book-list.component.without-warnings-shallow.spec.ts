import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Book } from '../shared/book';
import { BookListComponent } from './book-list.component';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [BookListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // NEU
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should trigger an event on click', () => {

    let receivedBook: Book | undefined;
    component.selectBook.subscribe(book => {
      receivedBook = book;
    });

    fixture.nativeElement
      .querySelector('bm-book-list-item').click();
    expect(receivedBook?.title).toBe('Tierisch gut kochen');
  });
});
