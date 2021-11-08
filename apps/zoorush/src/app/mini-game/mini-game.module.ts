import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EthereumModule } from '../ethereum/ethereum.module';
import { SharedModule } from '../shared/shared.module';
import { MiniGameAliasDialogComponent } from "./alias-dialog/alias.dialog.component";
import { MiniGameRoutingModule } from './mini-game-routing.module';
import { MiniGameComponent } from './mini-game.component';

@NgModule({
  declarations: [MiniGameComponent, MiniGameAliasDialogComponent],
  exports: [MiniGameComponent, MiniGameAliasDialogComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MiniGameRoutingModule,
    FontAwesomeModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    EthereumModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
  ],
})
export class MiniGameModule {}
