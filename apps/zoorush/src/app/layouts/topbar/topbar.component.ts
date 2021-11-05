import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MenuItems } from '../../shared/services/menu-items/menu-items';
import { AbstractNavbarComponent } from '../abstract-navbar.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
})
export class TopbarComponent extends AbstractNavbarComponent {
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    menuItems: MenuItems,
    dialog: MatDialog,
    router: Router
  ) {
    super(changeDetectorRef, media, menuItems, dialog, router);
  }
}
