import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import { get, getDatabase, onValue, ref, set } from '@angular/fire/database';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataSnapshot } from '@firebase/database';
import { faEdit, faHome, faWallet } from '@fortawesome/free-solid-svg-icons';
import {
  BehaviorSubject,
  combineLatest,
  from,
  fromEvent,
  Observable,
  of,
} from 'rxjs';
import {
  catchError,
  concatMap,
  filter,
  map,
  mergeMap,
  switchAll,
  switchMapTo,
} from 'rxjs/operators';
import { AccountsService } from '../ethereum/accounts.service';
import { AbstractNavbarComponent } from '../layouts/abstract-navbar.component';
import { MenuItems } from '../shared/services/menu-items/menu-items';
import { MiniGameAliasDialogComponent } from './alias-dialog/alias.dialog.component';

const miniGameWalletAlias = 'zoo-rush-mini-game::wallet-alias';

@Component({
  selector: 'app-mini-game',
  templateUrl: './mini-game.component.html',
  styleUrls: ['./mini-game.component.scss'],
})
export class MiniGameComponent extends AbstractNavbarComponent {
  alias$: BehaviorSubject<string>;
  homeIcon = faHome;
  walletIcon = faWallet;
  editIcon = faEdit;
  connected: boolean = false;
  db = getDatabase();
  _connectedWallet$: BehaviorSubject<Observable<string>>;
  connectedWallet$: Observable<string>;
  gameHighscore$: Observable<string>;
  _highscore: BehaviorSubject<string> = new BehaviorSubject<string>('0');
  highscore$: Observable<string>;

  constructor(
    private accounts: AccountsService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    menuItems: MenuItems,
    dialog: MatDialog,
    router: Router
  ) {
    super(changeDetectorRef, media, menuItems, dialog, router);
    this.alias$ = new BehaviorSubject<string>(this.getAlias());
    this._connectedWallet$ = new BehaviorSubject<Observable<string>>(of(''));
    this.connectedWallet$ = this._connectedWallet$.pipe(switchAll());
    this.gameHighscore$ = fromEvent<MessageEvent>(window, 'message').pipe(
      filter(
        (m) => typeof m?.data === 'object' && m?.data.type === 'game-highscore'
      ),
      map((m) => {
        console.log('Decoded Message: ', m?.data);
        return m?.data.highscore;
      })
    );

    this.highscore$ = this.connectedWallet$.pipe(
      mergeMap((wallet: string) =>
        this.onData(wallet, (h: string) => this._highscore.next(h))
      ),
      switchMapTo(this._highscore)
    );

    combineLatest([this.gameHighscore$, this.connectedWallet$])
      .pipe(
        filter(([highscore, wallet]: [string, string]) => {
          const validHighscore = Number(highscore) > 0;
          const validWallet = typeof wallet === 'string' && wallet.length > 0;
          return validWallet && validHighscore;
        }),
        concatMap(([highscore, wallet]: [string, string]) =>
          this.writeData(highscore, wallet)
        ),
        catchError((err) => of(err))
      )
      .subscribe();
  }

  getAlias() {
    const alias = localStorage.getItem(miniGameWalletAlias) ?? '';
    return alias;
  }

  connectWallet() {
    this._connectedWallet$.next(
      this.accounts
        .currentAccount({
          onAccountChanges: async (_, accounts) => {
            if (accounts.length > 0) {
              const data = await this.getData(accounts[0].toLowerCase());
              this.setAlias(data.alias);
              this._highscore.next(data.highscore);
            }
          },
        })
        .pipe(map((acc) => (acc instanceof Error ? '' : acc)))
    );
  }

  async writeData(highscore: string, wallet: string) {
    const dataBasehighscore = (await this.getData(wallet));
    console.log(highscore, dataBasehighscore);
    if (Number(dataBasehighscore.highscore) < Number(highscore)) {
      console.log('Write Success');

      const newAlias = this.getAlias().length > 0 ? this.getAlias() : dataBasehighscore.alias;
      this.setAlias(newAlias);

      await set(ref(this.db, 'miniGame/' + wallet), {
        highscore,
        alias: newAlias,
      });
    }
  }

  async onData(
    wallet: string,
    cb: (highscore: string) => void
  ): Promise<() => void> {
    return onValue(
      ref(this.db, 'miniGame/' + wallet + '/highscore'),
      (s: DataSnapshot) => cb(s.val())
    );
  }

  async getData(wallet: string): Promise<{ alias: string; highscore: string }> {
    return (await get(ref(this.db, 'miniGame/' + wallet))).val();
  }

  override openDialog() {
    const dialogRef = this.dialog.open(MiniGameAliasDialogComponent, {
      data: {
        alias: this.getAlias(),
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) {
        this.setAlias(result);
      }
    });
  }

  setAlias(alias: string) {
    localStorage.setItem(miniGameWalletAlias, alias);
    this.alias$.next(alias);
  }
}
