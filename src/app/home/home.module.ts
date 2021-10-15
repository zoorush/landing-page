import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { StickerComponent } from './sticker/sticker.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(HomeRoutes),
    MatDividerModule,
    MatCardModule,
  ],
  declarations: [HomeComponent, HeroComponent, StickerComponent],
})
export class HomeModule {}
