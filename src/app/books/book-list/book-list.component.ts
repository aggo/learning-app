import {Component, OnInit} from '@angular/core';

import {Book} from '../recipe.model';
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [
    new Book('A Test Book', 'This is simply a test', 'https://zeerk.com/mod/uploads/2017/03/book-523x405.jpg'),
    new Book('A Test Book', 'This is simply a test', 'https://zeerk.com/mod/uploads/2017/03/book-523x405.jpg')
  ];

  public booksFromFirebaseForDisplay: Observable<any[]>;
  public newBookName: string;
  public canAddBook = false;
  public booksAddedMessage: string = "No book added so far!";

  constructor(private db: AngularFireDatabase) {
    // = "make sth happen after 2 seconds"
    setTimeout(() => {
      this.canAddBook = true;
    }, 2000);
    this.booksFromFirebaseForDisplay = db.list('/books').valueChanges();
  }

  ngOnInit() {
  }

  onBookAdded() {
    const book = new Book(this.newBookName, 'random desc', '');
    this.db.list('/books').push(book);
    this.booksAddedMessage = "Book was added!";
  }

}
