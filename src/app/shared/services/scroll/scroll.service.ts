import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  distinctUntilChanged,
  map,
  pairwise,
  share,
  switchAll,
} from 'rxjs/operators';

export enum Direction {
  Up = 'Up',
  Down = 'Down',
}

@Injectable()
export class ScrollService {
  _scrollUp: Subject<Observable<number>> = new Subject<Observable<number>>();

  constructor() {}

  setScroll(scroll$: Observable<number>) {
    this._scrollUp.next(scroll$);
  }

  listenForScrollUp(): Observable<Direction> {
    return this._scrollUp.pipe(
      switchAll(),
      pairwise(),
      map(([y1, y2]: [number, number]): Direction =>
        y2 < y1 ? Direction.Up : Direction.Down
      ),
      distinctUntilChanged(),
      share()
    );
  }
}
