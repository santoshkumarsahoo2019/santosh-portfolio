import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AboutModule } from "../about/about.module";
import { BlogModule } from "../blog/blog.module";
import { ExperienceModule } from "../experience/experience.module";
import { HomeModule } from "../home/home.module";
import { SidebarComponent } from "./component/sidebar/sidebar.component";

@NgModule({
    declarations : [
        SidebarComponent
    ],
    imports : [
        CommonModule,
        // AboutModule,
        // ExperienceModule,
        // BlogModule,
        // HomeModule
    ],
    exports : [
        SidebarComponent
    ]
})

export class SharedModule {}