import { NgModule } from "@angular/core";
import { AchievementRoutingModule } from "./achievement-routing.module";
import { AchievementComponent } from "./achievement.component";

@NgModule({
    declarations : [
        AchievementComponent
    ],
    imports : [
        AchievementRoutingModule
    ],
    exports : [
        AchievementComponent
    ]
})

export class AchievementModule {}