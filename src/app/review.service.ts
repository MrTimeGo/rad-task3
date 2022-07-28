import { Injectable } from '@angular/core';
import { REVIEWS } from './mock-data';
import { Review } from './review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor() { }

  getReviewsByBookId(id : number) : Review[] {
    return REVIEWS;
  }
}
