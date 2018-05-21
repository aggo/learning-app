import {Component, OnInit} from '@angular/core';
import {Book} from '../../recipe.model';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-book-appender',
  templateUrl: './book-appender.component.html',
  styleUrls: ['./book-appender.component.css']
})
export class BookAppenderComponent implements OnInit {
  public canAddBook = false;
  public booksAddedMessage = 'No book added so far!';
  public newBookName: string;

  constructor(private db: AngularFireDatabase) {
    // = "make sth happen after 2 seconds"
    setTimeout(() => {
      this.canAddBook = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onBookAdded() {
    const book = new Book(this.newBookName, 'random desc', '');
    this.db.list('/books').push(book);
    this.booksAddedMessage = 'Book ' + this.newBookName + ' was added!';
  }
  }