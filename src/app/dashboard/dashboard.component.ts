import { Component, OnInit } from '@angular/core';

import { AngularFireAction, AngularFireDatabase, DatabaseSnapshot } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  quotes: Observable<AngularFireAction<DatabaseSnapshot<any>>[]>;
  randomQuote: Quote;

  constructor(private db: AngularFireDatabase) {

    // https://github.com/angular/angularfire2/blob/master/docs/rtdb/lists.md
    // snapshotChanges(): Why would you use it? - When you need a list of data but also
    // want to keep around metadata. Metadata provides you the underyling DatabaseReference and snapshot key. Having the snapshot's
    // key around makes it easier to use data manipulation methods.
    this.quotes = db.list<Quote>('quotes', entries =>
      entries.limitToFirst(1)
    ).snapshotChanges();
  }

  ngOnInit() {
  }

  onBookSelected(quote: Quote) {
  }
}
