import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from '../shared/shared.module';
import { MiniGameRoutingModule } from './mini-game-routing.module';
import { MiniGameComponent } from './mini-game.component';

@NgModule({
  exports: [MiniGameComponent],
  declarations: [MiniGameComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MiniGameRoutingModule,
    FontAwesomeModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class MiniGameModule {}
