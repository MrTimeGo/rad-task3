import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Book } from '../book';
import { BOOKS } from '../mock-data';

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

  constructor(private changeDetector:ChangeDetectorRef) { }

  ngOnInit(): void {
  }


  convertToBase64(file : File) {
    let image;
    var reader = new FileReader();
    reader.onload = (event:any) => 
    {
        image = event.target.result;
        this.changeDetector.detectChanges();
    }
    reader.readAsDataURL(file);
    return image;
  }

  async onSubmit() {

    const toBase64 = (file: Blob) => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
  });
  
    let base64 = await toBase64(this.newBookForm.value.cover) as string;
    let book = this.newBookForm.value as Book;
    book.cover = base64;
    BOOKS.push(book)
    this.newBookForm.reset();
  }


}
