import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DemoMaterialModule } from '../demo-material-module';
import { AccordionAnchorDirective, AccordionDirective, AccordionLinkDirective } from './accordion';
import { BrandComponent } from './brand/brand.component';
import { MenuItems } from './menu-items/menu-items';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { SpinnerComponent } from './spinner.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
  ],
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    SpinnerComponent,
    UserComponent,
    BrandComponent,
    SocialIconsComponent,
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    SpinnerComponent,
    UserComponent,
    BrandComponent,
    SocialIconsComponent,
  ],
  providers: [MenuItems]
})
export class SharedModule { }
