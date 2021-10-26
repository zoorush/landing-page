import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiniGameRoutingModule } from './mini-game-routing.module';
import { MiniGameComponent } from './mini-game.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  exports: [MiniGameComponent],
  declarations: [MiniGameComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MiniGameRoutingModule,
    SharedModule,
  ],
})
export class MiniGameModule {}
