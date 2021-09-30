import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ChartistModule } from 'ng-chartist';
import { DemoMaterialModule } from '../demo-material-module';
import { ActivityComponent } from './dashboard-components/activity/activity.component';
import { ContactsComponent } from './dashboard-components/contacts/contacts.component';
import { SalesOverviewGrapComponent } from './dashboard-components/sales-overview-grap/sales-overview-grap.component';
import { StickerComponent } from './dashboard-components/sticker/sticker.component';
import { VisiterGraphComponent } from './dashboard-components/visiter-graph/visiter-graph.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  declarations: [DashboardComponent, SalesOverviewGrapComponent, VisiterGraphComponent, StickerComponent, ContactsComponent, ActivityComponent],
  exports: [DashboardComponent, SalesOverviewGrapComponent, VisiterGraphComponent, StickerComponent, ContactsComponent, ActivityComponent]
})
export class DashboardModule { }
