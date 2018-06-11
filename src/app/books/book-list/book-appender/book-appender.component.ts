import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Book } from '../../book.model';

@Component({
  selector: 'app-book-appender',
  templateUrl: './book-appender.component.html',
  styleUrls: ['./book-appender.component.css']
})
export class BookAppenderComponent implements OnInit {
  public canAddBook = false;
  public booksAddedMessage = 'No book added so far!';
  public newBookName: string;
  public newBookId: string;
  public newBookAuthor: string;

  constructor(private db: AngularFireDatabase) {
    // = "make sth happen after 2 seconds"
    setTimeout(() => {
      this.canAddBook = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onBookAdded() {
    const book = new Book(this.newBookName, 'random desc', '', this.newBookId, this.newBookAuthor);
    this.db.list('/books').push(book);
    this.booksAddedMessage = 'Book ' + this.newBookName + ' was added!';
  }
}
