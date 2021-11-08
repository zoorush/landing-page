import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from "@angular/material/menu";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EthereumModule } from '../ethereum/ethereum.module';
import { SharedModule } from '../shared/shared.module';
import { MiniGameRoutingModule } from './mini-game-routing.module';
import { MiniGameComponent } from './mini-game.component';

@NgModule({
  declarations: [MiniGameComponent],
  exports: [MiniGameComponent],
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
  ],
})
export class MiniGameModule {}
