import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ChartistModule } from 'ng-chartist';
import { DemoMaterialModule } from '../demo-material-module';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [
    HomeComponent,
    HeroComponent,
  ]
})
export class HomeModule { }
