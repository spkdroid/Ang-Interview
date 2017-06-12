import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent} from './app.component';
import { AboutComponent} from './about/about.component';
import { ServiceComponent} from './service/service.component';
import { InboxComponent } from './inbox/inbox.component';
import { ComposeComponent } from './compose/compose.component';


export const router: Routes = [
{ path: '',redirectTo:"inbox",pathMatch:'full'},
{ path: 'about',component: AboutComponent},
{ path: 'service',component: ServiceComponent},
{ path: 'inbox',component: InboxComponent},
{ path: 'compose',component: ComposeComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);