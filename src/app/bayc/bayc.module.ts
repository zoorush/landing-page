import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BAYCComponent } from './bayc.component';
import { BAYCRoutes } from './bayc.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BAYCRoutes)
  ],
  declarations: [
    BAYCComponent,
  ],
  exports: [
    BAYCComponent,
  ]
})
export class BAYCModule { }
