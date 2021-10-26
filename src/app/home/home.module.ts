import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NftsComponent } from './nfts/nfts.component';
import { SharedModule } from '../shared/shared.module';
import { SectionComponent } from './section/section.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { MatButtonModule } from "@angular/material/button";
import { TeamComponent } from "./team/team.component";
import { MatStepperModule } from "@angular/material/stepper";

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
