import { Component, OnInit } from '@angular/core';

import { BOOKS } from '../books';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books = BOOKS;

  constructor() { }

  ngOnInit(): void {
  }

  changeList(listType : string) {
    console.log(listType);
  }
}
