import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import {
  AngularFireAnalyticsModule,
  APP_NAME,
  APP_VERSION, COLLECTION_ENABLED, DEBUG_MODE as ANALYTICS_DEBUG_MODE,
  ScreenTrackingService,
  UserTrackingService
} from '@angular/fire/compat/analytics';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoMaterialModule } from './demo-material-module';
import { LayoutModule } from './layouts/layout.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    DemoMaterialModule,
    HttpClientModule,
    MatToolbarModule,
    SharedModule,
    LayoutModule,
    MatIconModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    UserTrackingService,
    ScreenTrackingService,
    { provide: ANALYTICS_DEBUG_MODE, useValue: true },
    { provide: COLLECTION_ENABLED, useValue: true },
    { provide: APP_VERSION, useValue: '0.0.0' },
    { provide: APP_NAME, useValue: 'Angular' },
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faTwitter, faDiscord);
  }
}
