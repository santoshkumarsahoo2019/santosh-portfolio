import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './shared/component/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
