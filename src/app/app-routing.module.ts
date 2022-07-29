import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BooksPageComponent } from './books-page/books-page.component';



const routes: Routes = [
  { path: '', component: BooksPageComponent },
  { path: ':id', component: BooksPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
