import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';

interface AliasDialogData {
  alias: string;
  wallet: Observable<string>;
}

@Component({
  selector: 'app-mini-game-alias-dialog',
  template: `<h1 mat-dialog-title *ngIf="data.alias">Hi {{ data.alias }}</h1>
    <p class="text-truncate">Wallet: {{ data.wallet | async }}</p>
    <div mat-dialog-content>
      <mat-form-field appearance="fill">
        <mat-label>User Alias</mat-label>
        <input matInput [(ngModel)]="data.alias" />
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="cancel()">Cancel</button>
      <button mat-button [mat-dialog-close]="data.alias">Ok</button>
    </div>`,
  styleUrls: ['./alias.dialog.component.scss'],
})
export class MiniGameAliasDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<MiniGameAliasDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AliasDialogData
  ) {}

  cancel() {
    this.dialogRef.close();
  }
}
