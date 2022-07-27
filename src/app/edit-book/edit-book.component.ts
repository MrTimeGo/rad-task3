import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Book } from '../book';
import { BOOKS } from '../books';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  newBookForm = new FormGroup({
    title : new FormControl(''),
    cover : new FormControl(''),
    genre : new FormControl(''),
    author : new FormControl(''),
    content : new FormControl('')
  });

  profileImage:any;

  constructor(private changeDetector:ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  imageUpload(event:any)
  {
    var file = event.target.files.length;
    for(let i=0;i<file;i++)
    {
       var reader = new FileReader();
       reader.onload = (event:any) => 
       {
           this.profileImage = event.target.result;
           this.changeDetector.detectChanges();
       }
       reader.readAsDataURL(event.target.files[i]);
    }
  }

  onSubmit() {
    let book = this.newBookForm.value as Book;
    book.cover = this.profileImage;
    BOOKS.push(book);
    this.profileImage = null;
    this.newBookForm.reset();
  }


}
