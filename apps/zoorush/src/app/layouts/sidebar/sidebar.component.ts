import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MenuItems } from '../../shared/services/menu-items/menu-items';
import { AbstractNavbarComponent } from '../abstract-navbar.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class AppSidebarComponent extends AbstractNavbarComponent {
  validUser: boolean = false;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    menuItems: MenuItems,
    dialog: MatDialog,
    router: Router
  ) {
    super(changeDetectorRef, media, menuItems, dialog, router);
  }

  @Input() toggle: () => void = () => {};

  connectWallet() {
    alert('Connect to MetaMask Wallet');
  }
}
