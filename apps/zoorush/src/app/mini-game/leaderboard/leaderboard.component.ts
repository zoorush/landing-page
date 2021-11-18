import { ColDef, GridOptions } from '@ag-grid-community/all-modules';
import { Component, OnDestroy } from '@angular/core';
import { Database, onValue, ref } from '@angular/fire/database';
import { DataSnapshot } from '@firebase/database';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

type Data = {
  rank: number;
  alias: string;
  highscore: string;
  wallet: string;
};

@Component({
  selector: 'zoorush-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent implements OnDestroy {
  subscriptions: Subscription = new Subscription();

  columnDefs: ColDef[] = [
    { field: 'rank', headerName: 'Position', flex: 1, sort: 'asc' },
    { field: 'wallet', headerName: 'ETH Wallet Address', flex: 2 },
    { field: 'alias', headerName: 'User Alias', flex: 1 },
    { field: 'highscore', headerName: 'Highscore', flex: 1 },
  ];

  gridOptions: GridOptions = {
    rowSelection: 'single',
    animateRows: true,
    suppressMovableColumns: true,
    defaultColDef: {
      // floatingFilter: true,
      sortable: true,
      resizable: true,
      filter: true,
    },
  };

  _rowData$ = new BehaviorSubject<Omit<Data, 'rank'>[]>([]);
  rows$: Observable<Data[]> = this._rowData$.pipe(
    map((value: Omit<Data, 'rank'>[]) =>
      value.sort((a, b) => {
        if (Number(b.highscore) > Number(a.highscore)) {
          return 1;
        }
        if (Number(b.highscore) < Number(a.highscore)) {
          return -1;
        }
        return 0;
      }).map((value: Omit<Data, 'rank'>, index: number) => ({
        rank: index + 1,
        ...value
      }))
    )
  );

  constructor(private db: Database) {
    this.subscriptions.add(
      onValue(ref(this.db, 'miniGame'), (s: DataSnapshot) =>
        this._rowData$.next(this.mapToGridData(s.val()))
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  mapToGridData(
    outData: Record<string, { alias: string; highscore: string }>
  ): Omit<Data, 'rank'>[] {
    return Object.entries(outData).map(
      ([k, v]: [string, { alias: string; highscore: string }]) => {
        return {
          wallet: k,
          alias: v.alias,
          highscore: v.highscore,
        };
      }
    );
  }
}
