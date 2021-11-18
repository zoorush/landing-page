import {
  AllCommunityModules,
  ModuleRegistry,
} from '@ag-grid-community/all-modules';
import { AgGridModule } from '@ag-grid-community/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LeaderboardComponent } from './leaderboard.component';

ModuleRegistry.registerModules(AllCommunityModules);

@NgModule({
  imports: [CommonModule, AgGridModule],
  declarations: [LeaderboardComponent],
  exports: [LeaderboardComponent],
})
export class LeaderboardModule {}
