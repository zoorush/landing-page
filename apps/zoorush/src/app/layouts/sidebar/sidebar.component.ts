import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { MenuItems } from '../../shared/services/menu-items/menu-items';
import { AbstractNavbarComponent } from '../abstract-navbar.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class AppSidebarComponent extends AbstractNavbarComponent {
  validUser: boolean = false;
  @Input() toggle: () => void = () => {};

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    menuItems: MenuItems,
    dialog: MatDialog,
    router: Router
  ) {
    super(changeDetectorRef, media, menuItems, dialog, router);
  }

  connectWallet() {
    alert('Connect to MetaMask Wallet');
  }
}
