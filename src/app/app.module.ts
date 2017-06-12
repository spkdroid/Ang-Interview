import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routes} from './app.router'
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { LogoutComponent } from './logout/logout.component';
import { InboxComponent } from './inbox/inbox.component';
import { ComposeComponent } from './compose/compose.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServiceComponent,
    LogoutComponent,
    InboxComponent,
    ComposeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
