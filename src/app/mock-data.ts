import { Book } from './book';
import { Review } from './review';

export const BOOKS : Book[] = [
    { id : 1, title: "The Lord of the Rings", cover : "1", author: "Tolkien", content: "There and back again", genre : "Fantasy", rating: 5, reviewNumber: 200},
    { id : 2, title: "Star wars", cover : "1", author: "George Lucas", content: "Once in galaxy far far away..", genre : "Fantasy", rating: 4.8, reviewNumber: 298},
    { id : 3, title: "The Witcher", cover : "1", author: "Andjey Sapkovskiy", content: "Ciri is being hunted by Wild Hunt", genre : "Fantasy",rating: 3.5, reviewNumber: 100},
    { id : 4, title: "1984", cover : "1", author: "George Orwell", content: "Older brother is watching you", genre : "Antiuthopy", rating: 5, reviewNumber: 400},
]

export const REVIEWS : Review[] = [
    { id : 1, message : "hello", reviewer : "Reviewer 1"},
    { id : 2, message : "Great", reviewer : "Reviewer 2"}
]