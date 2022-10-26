import { NgModule } from "@angular/core";
import { ExperienceRoutingModule } from "./experience-routing.module";
import { ExperienceComponent } from "./experience.component";

@NgModule({
    declarations : [
        ExperienceComponent
    ],
    imports : [
        ExperienceRoutingModule
    ],
    exports : [
        ExperienceComponent
    ]
})

export class ExperienceModule {}