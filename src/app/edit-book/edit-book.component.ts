import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Book } from '../book';
import { BookService } from '../book.service';
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
  
  action = "";
  secondaryAction = "";
  bookToEdit : Book | null = null;

  constructor(
    private changeDetector:ChangeDetectorRef,
    private route: ActivatedRoute,
    private bookService: BookService,
    private formBuilder : FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    let book = this.bookService.getBookById(id).subscribe(book => {
      if(book) {
        this.action = 'Edit';
        this.secondaryAction = 'Delete';
        this.newBookForm = this.formBuilder.group({
          title : book.title,
          cover : '',
          genre : book.genre,
          author : book.author,
          content : book.content
        });
        this.bookToEdit = book;
      }
      else {
        this.action = 'Add';
        this.secondaryAction = 'Clear';
        this.newBookForm = this.formBuilder.group({
          title : '',
          cover : '',
          genre : '',
          author : '',
          content : ''
        });
      }
    });
  }


  async convertToBase64(file : File) : Promise<string> {
    const toBase64 = (file: Blob) => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
    return await toBase64(file) as string;
  }

  async onSubmit() {

    let cover = this.newBookForm.value.cover;
    let book = this.newBookForm.value as Book;

    if (cover != ''){
      let base64 = await this.convertToBase64(cover);
      book.cover = base64;
    }
    else {
      book.cover = this.bookToEdit?.cover as string;
    }

    book.reviewNumber = this.bookToEdit?.reviewNumber as number;
    book.rating = this.bookToEdit?.rating as number;

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.bookService.editBook(id, book);
    }
    else {
      this.bookService.addBook(book);
    }
    this.router.navigate(['']);
  }

  onCancel() {
    if (this.bookToEdit) {
      this.bookService.deleteBook(this.bookToEdit.id);
    }
    else {
      this.newBookForm.reset();
    }

  }

}
