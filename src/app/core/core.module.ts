import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { routingModule } from './routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './components/auth/auth.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { AuthentificateService } from './services/authentificate.service';
import { AuthorizationComponent } from './components/auth/authorization/authorization.component';

@NgModule({
  imports: [
    CommonModule,
    routingModule,
    SharedModule
  ],
  providers: [
    AuthentificateService
  ],
  declarations: [
    AuthorizationComponent,
    DashboardComponent,
    SideNavComponent,
    AuthComponent,
    RegistrationComponent
  ],
  exports: [
    SharedModule,
  ]
})
export class CoreModule { }
