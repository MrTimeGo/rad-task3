import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


import { Book } from '../book';
import { REVIEWS } from '../mock-data';
import { Review } from '../review';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  reviews : Review[] = REVIEWS;

  constructor(@Inject(MAT_DIALOG_DATA) public book: Book) { }

  ngOnInit(): void {
  }

}
