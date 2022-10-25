import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AboutComponent } from "../about/about.component";
import { HomeComponent } from "../home/home.component";
import { SidebarComponent } from "./component/sidebar/sidebar.component";

@NgModule({
    declarations : [
        SidebarComponent
    ],
    imports : [
        CommonModule
    ],
    exports : [
        SidebarComponent
    ]
})

export class SharedModule {}