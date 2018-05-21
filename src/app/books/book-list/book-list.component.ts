import {Component, OnInit} from '@angular/core';

import {Book} from '../recipe.model';
import {AngularFireAction, AngularFireDatabase, DatabaseSnapshot} from 'angularfire2/database';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  public booksFromFirebaseForDisplay: Observable<any[]>;
  books: Observable<AngularFireAction<DatabaseSnapshot<any>>[]>;

  constructor(private db: AngularFireDatabase) {
    this.books = db.list('books').snapshotChanges();
    // this.booksFromFirebaseForDisplay = db.list('/books').valueChanges();
  }

  ngOnInit() {
  }

  onBookSelected(book: Book) {
    // todo: master-detail next time
    window.alert(book.name);
  }
}
