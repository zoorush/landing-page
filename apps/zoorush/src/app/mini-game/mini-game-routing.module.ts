import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiniGameComponent } from './mini-game.component';

export const MiniGameRoutes: Routes = [
  {
    path: '',
    component: MiniGameComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(MiniGameRoutes)],
  exports: [RouterModule],
})
export class MiniGameRoutingModule {}
