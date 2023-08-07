import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookSelectComponent } from './book-select/book-select.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
