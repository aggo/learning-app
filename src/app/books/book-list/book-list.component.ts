import { Component, OnInit } from '@angular/core';

import { AngularFireAction, AngularFireDatabase, DatabaseSnapshot } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { QuotesService } from '../../quotes.service';
import { Book } from '../book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Observable<AngularFireAction<DatabaseSnapshot<any>>[]>;

  constructor(private db: AngularFireDatabase,
              private quotesService: QuotesService,
              private router: Router) {
    this.books = db.list<Book>('books').snapshotChanges();
  }

  ngOnInit() {
  }

  onBookSelected(book: any) {
    this.quotesService.noBookChecked = false;
    this.quotesService.bookSelected.emit(book.payload.val().id);
  }

  readMore(bookid: string) {
    // this.router.navigateByUrl('/book/' + bookid);
    this.router.navigate(['book', bookid]); // builds the same route as above
  }
}
