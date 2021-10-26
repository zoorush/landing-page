import {
  ChangeDetectorRef,
  Component,
  Directive,
  Inject,
  OnDestroy,
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Menu, MenuItems } from '../shared/services/menu-items/menu-items';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from "@angular/router";

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
    if (menuItem.state !== 'team' && menuItem.state !== 'roadmap') {
      this.dialog.open(DialogDataExampleDialogComponent, {
        data: {
          menuItem,
        },
      });
    } else {
      this.router.navigateByUrl('/home#' + menuItem.state, { skipLocationChange: false })
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
