import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatStepperModule } from '@angular/material/stepper';
import { SharedModule } from '../shared/shared.module';
import { HeroComponent } from './hero/hero.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NftsComponent } from './nfts/nfts.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { SectionComponent } from './section/section.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDividerModule,
    MatCardModule,
    HomeRoutingModule,
    SharedModule,
    MatButtonModule,
    MatStepperModule,
  ],
  declarations: [
    HomeComponent,
    HeroComponent,
    NftsComponent,
    SectionComponent,
    RoadmapComponent,
    TeamComponent,
  ],
  exports: [
    HomeComponent,
    HeroComponent,
    NftsComponent,
    SectionComponent,
    RoadmapComponent,
    TeamComponent,
  ],
})
export class HomeModule {}
