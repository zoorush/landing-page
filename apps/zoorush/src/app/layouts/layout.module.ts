import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { DialogDataExampleDialogComponent } from './abstract-navbar.component';
import { AppFooterComponent } from './footer/footer.component';
import { FullComponent } from './full/full.component';
import { AppHeaderComponent } from './header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { AppSidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LayoutRoutingModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MatListModule,
    MatDividerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
  declarations: [
    FullComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppSidebarComponent,
    TopbarComponent,
    DialogDataExampleDialogComponent,
  ],
  exports: [
    FullComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppSidebarComponent,
    TopbarComponent,
    DialogDataExampleDialogComponent,
  ],
})
export class LayoutModule {}
