export interface Book {
    id : number;
    title : string;
    cover : string;
    genre : string;
    author : string;
    content : string;
    rating : number | null;
    reviewNumber : number | null;
}