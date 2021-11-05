import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
      {
        path: 'mini-game',
        loadChildren: () =>
          import('./mini-game/mini-game.module').then((m) => m.MiniGameModule),
      },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
