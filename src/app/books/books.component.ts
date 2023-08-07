import { Component } from '@angular/core';

import { Book } from '../book';
import { MYBOOKS } from '../my-books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  myBooks = MYBOOKS;

  selectedBook?: Book;

  onSelect(book: Book): void {
    this.selectedBook = book;
  }


}
