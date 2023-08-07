import { Component, Input } from '@angular/core';

import { Book } from '../book';

@Component({
  selector: 'app-book-select',
  templateUrl: './book-select.component.html',
  styleUrls: ['./book-select.component.css']
})
export class BookSelectComponent {

  @Input() book?: Book;

}
