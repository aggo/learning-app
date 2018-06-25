import { Component, OnInit } from '@angular/core';

import { AngularFireAction, AngularFireDatabase, DatabaseSnapshot } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Quote } from './quote.model';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {
  quotes: Observable<AngularFireAction<DatabaseSnapshot<any>>[]>;

  constructor(private db: AngularFireDatabase, public quotesService: QuotesService) {

    // https://github.com/angular/angularfire2/blob/master/docs/rtdb/lists.md
    // snapshotChanges(): Why would you use it? - When you need a list of data but also
    // want to keep around metadata. Metadata provides you the underyling DatabaseReference and snapshot key. Having the snapshot's
    // key around makes it easier to use data manipulation methods.
    this.quotes = db.list<Quote>('quotes').snapshotChanges();
    this.quotesService.bookSelected.subscribe((bookid: string) => {
      // window.alert(bookid);
      this.quotes = db.list<Quote>('quotes', entries =>
        entries.orderByChild('bookid').equalTo(bookid))
        .snapshotChanges();
    });
  }

  ngOnInit() {
  }

  onBookSelected(quote: Quote) {
  }
}
