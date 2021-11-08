import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { faHome, faWallet } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, fromEvent, Observable, of } from 'rxjs';
import { filter, map, switchAll } from 'rxjs/operators';
import { AccountsService } from '../ethereum/accounts.service';
import { AbstractNavbarComponent } from '../layouts/abstract-navbar.component';
import { MenuItems } from '../shared/services/menu-items/menu-items';

@Component({
  selector: 'app-mini-game',
  templateUrl: './mini-game.component.html',
  styleUrls: ['./mini-game.component.scss'],
})
export class MiniGameComponent extends AbstractNavbarComponent {
  homeIcon = faHome;
  walletIcon = faWallet;
  connected: boolean = false;
  _connectedWallet$: BehaviorSubject<Observable<string>>;
  connectedWallet$: Observable<string>;
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
    this._connectedWallet$ = new BehaviorSubject<Observable<string>>(of(''));
    this.connectedWallet$ = this._connectedWallet$.pipe(switchAll());
    this.highscore$ = fromEvent<MessageEvent>(window, 'message').pipe(
      filter(
        (m) => typeof m?.data === 'object' && m?.data.type === 'game-highscore'
      ),
      map((m) => {
        console.log('Decoded Message: ', m?.data);
        return m?.data.highscore;
      })
    );
  }

  connectWallet() {
    this._connectedWallet$.next(
      this.accounts
        .currentAccount()
        .pipe(map((acc) => (acc instanceof Error ? '' : acc)))
    );
  }
}
