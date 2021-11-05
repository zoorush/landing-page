import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExtendedModule, FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  AccordionAnchorDirective,
  AccordionDirective,
  AccordionLinkDirective,
} from './components/accordion';
import { BrandComponent } from './components/brand/brand.component';
import { DividerComponent } from './components/divider/divider.component';
import { FadeInComponent } from './components/fade-in/fade-in.component';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { StickerComponent } from './components/sticker/sticker.component';
import { StickyHeaderComponent } from './components/sticky-header/sticky-header.component';
import { UserComponent } from './components/user/user.component';
import { MenuItems } from './services/menu-items/menu-items';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    ExtendedModule,
    FlexLayoutModule,
  ],
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    SpinnerComponent,
    UserComponent,
    BrandComponent,
    SocialIconsComponent,
    StickerComponent,
    DividerComponent,
    FadeInComponent,
    StickyHeaderComponent,
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    SpinnerComponent,
    UserComponent,
    BrandComponent,
    SocialIconsComponent,
    StickerComponent,
    DividerComponent,
    FadeInComponent,
    StickyHeaderComponent,
  ],
  providers: [MenuItems],
})
export class SharedModule {}
