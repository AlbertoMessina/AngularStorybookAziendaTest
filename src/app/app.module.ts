import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionbarComponent } from './component/actionbar/actionbar.component';
import { StorybookCardComponent } from './component/storybook-card/storybook-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionbarComponent,
    StorybookCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
