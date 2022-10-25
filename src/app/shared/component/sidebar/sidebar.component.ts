import { Component, Input } from '@angular/core';

@Component({
    selector : "sidebar",
    templateUrl : './sidebar.component.html'
})

export class SidebarComponent {
    @Input() sidebarTabs!: object;
}