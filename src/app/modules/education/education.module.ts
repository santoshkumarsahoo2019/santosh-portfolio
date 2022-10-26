import { NgModule } from "@angular/core";
import { EducationComponent } from "./education.component";
import { EducationRoutingModule } from "./education-routing.module";

@NgModule({
    declarations: [
        EducationComponent
    ],
    imports : [
        EducationRoutingModule
    ],
    exports: [
        EducationComponent
    ]
})

export class EducationModule {}