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
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCJMy6bkMBeORQ-4z8mY23TLUoY54n9jhw',
  authDomain: 'playful-adb84.firebaseapp.com',
  databaseURL: 'https://playful-adb84.firebaseio.com',
  projectId: 'playful-adb84',
  storageBucket: 'playful-adb84.appspot.com',
  messagingSenderId: '408681826999'
};

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    CommonModule,
    routingModule,
    SharedModule
  ],
  providers: [
    AuthentificateService,
    AngularFireAuth,
    AngularFirestore
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
