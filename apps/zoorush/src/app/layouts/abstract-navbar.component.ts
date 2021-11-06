import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectorRef,
  Component,
  Directive,
  Inject,
  OnDestroy,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Menu, MenuItems } from '../shared/services/menu-items/menu-items';

export interface DialogData {
  menuItem: Menu;
}

@Directive()
export abstract class AbstractNavbarComponent implements OnDestroy {
  public mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems,
    public dialog: MatDialog,
    public router: Router
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  openDialog(menuItem: Menu) {
    if (menuItem.state !== 'team' && menuItem.state !== 'roadmap' && menuItem.state !== 'game') {
      this.dialog.open(DialogDataExampleDialogComponent, {
        data: {
          menuItem,
        },
      });
    }
    else if (menuItem.state === 'game') {
      this.router.navigate(['/mini-game']);
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}

@Component({
  selector: 'app-dialog-data-example-dialog',
  templateUrl: 'dialog.small.component.html',
})
export class DialogDataExampleDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
