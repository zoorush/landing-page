import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

interface AliasDialogData {
  alias: string;
}

@Component({
  selector: 'app-mini-game-alias-dialog',
  template: `<h1 mat-dialog-title *ngIf="data.alias">Hi {{data.alias}}</h1>
<div mat-dialog-content>
  <p>Would you like to personalise your wallet address?</p>
  <mat-form-field appearance="fill">
    <mat-label>User Wallet Alias</mat-label>
    <input matInput [(ngModel)]="data.alias">
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
