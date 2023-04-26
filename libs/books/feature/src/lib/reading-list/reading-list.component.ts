import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';
import {  getReadingList,markAsFinished, removeFromReadingList } from '@tmo/books/data-access'

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);
  snackBarRef: any;

  constructor(private readonly store: Store, private _snackBar: MatSnackBar) {}

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
  }

  markAsFinished(item) {
    this._snackBar.open(
      `Book with title as ${
        item.title
      } has been finished `,
      'DONE',
      {duration:5000}
    );
    this.store.dispatch(markAsFinished({ item }));
  };


}
