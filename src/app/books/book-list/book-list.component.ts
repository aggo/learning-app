import {Component, OnInit} from '@angular/core';

import {AngularFireAction, AngularFireDatabase, DatabaseSnapshot} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {QuotesService} from "../../quotes.service";
import {Book} from "../book.model";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Observable<AngularFireAction<DatabaseSnapshot>[]>;

  constructor(private db: AngularFireDatabase,
              private quotesService: QuotesService) {
    this.books = db.list<Book>('books').snapshotChanges();
  }

  ngOnInit() {
  }

  onBookSelected(book: any) {
    this.quotesService.bookSelected.emit(book.key);
  }
}
