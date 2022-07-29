import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


import { Book } from '../book';
import { ViewBookComponent } from '../view-book/view-book.component';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {

  @Input() book? : Book

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ViewBookComponent, {
      data : this.book
    });
  }

}
