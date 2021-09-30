import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DemoMaterialModule } from '../demo-material-module';
import { AccordionAnchorDirective, AccordionDirective, AccordionLinkDirective } from './accordion';
import { BrandComponent } from './brand/brand.component';
import { MenuItems } from './menu-items/menu-items';
import { SpinnerComponent } from './spinner.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
  ],
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    SpinnerComponent,
    UserComponent,
    BrandComponent,
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    SpinnerComponent,
    UserComponent,
    BrandComponent,
  ],
  providers: [MenuItems]
})
export class SharedModule { }
