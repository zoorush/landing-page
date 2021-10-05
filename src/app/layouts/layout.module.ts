import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { DemoMaterialModule } from "../demo-material-module";
import { SharedModule } from "../shared/shared.module";
import { AppFooterComponent } from "./footer/footer.component";
import { FullComponent } from "./full/full.component";
import { AppHeaderComponent } from "./header/header.component";
import { LayoutRoutingModule } from "./layout-routing.module";
import { AppSidebarComponent } from "./sidebar/sidebar.component";
import { TopbarComponent } from "./topbar/topbar.component";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        LayoutRoutingModule,
        FlexLayoutModule,
        FontAwesomeModule,
        DemoMaterialModule,
    ],
    declarations: [
        FullComponent,
        AppHeaderComponent,
        AppFooterComponent,
        AppSidebarComponent,
        TopbarComponent,
    ],
    exports: [
        FullComponent,
        AppHeaderComponent,
        AppFooterComponent,
        AppSidebarComponent,
        TopbarComponent,
    ],
})
export class LayoutModule { }