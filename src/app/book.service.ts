import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Book } from './book';
import { BOOKS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getAllBooks() : Observable<Book[]> {
    console.log('get')
    return of(BOOKS);
  }

  getRecomendedBooks() : Observable<Book[]> {
    return of(BOOKS.slice(0,2));
  }

  addBook(book : Book) : void {
    book.id = BOOKS[BOOKS.length - 1].id + 1;
    BOOKS.push(book);
  }

  editBook(id : number, book : Book) : void {
    let bookToEdit = BOOKS.find(b => b.id == id);
    if (!bookToEdit) {
      return;
    }
    let index = BOOKS.indexOf(bookToEdit);
    book.id = id;
    BOOKS[index] = book;
  }

  getBookById(id : number) : Observable<Book | undefined>  {
    return of(BOOKS.find(b => b.id == id));
  }

  deleteBook(id : number) : void {
    let book = BOOKS.find(b => b.id == id);
    if (book){
      let index = BOOKS.indexOf(book);
      BOOKS.splice(index, 1);
    }
  }
}
