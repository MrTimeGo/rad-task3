import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  allBooks : Observable<Book[]> | null = null;
  recomendedBooks : Observable<Book[]> | null = null;

  constructor(private bookService : BookService) { }

  ngOnInit(): void {
    this.getAllBooks();
    this.getRecomendedBooks();
  }

  getAllBooks() {
    this.allBooks = this.bookService.getAllBooks();
  }

  getRecomendedBooks() {
    this.recomendedBooks = this.bookService.getRecomendedBooks();
  }
}
