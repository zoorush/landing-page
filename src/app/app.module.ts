import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire/compat';

// import {
//   AngularFireAnalyticsModule,
//   APP_NAME,
//   APP_VERSION,
//   DEBUG_MODE as ANALYTICS_DEBUG_MODE,
//   ScreenTrackingService,
//   UserTrackingService,
//   COLLECTION_ENABLED
// } from '@angular/fire/compat/analytics';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAnalyticsModule
  ],
  providers: [
    // UserTrackingService,
    // ScreenTrackingService,
    // { provide: ANALYTICS_DEBUG_MODE, useValue: true },
    // { provide: COLLECTION_ENABLED, useValue: true },
    // { provide: APP_VERSION, useValue: '0.0.0' },
    // { provide: APP_NAME, useValue: 'Angular' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
