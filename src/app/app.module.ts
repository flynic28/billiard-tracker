import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CommonUtilitiesService } from '../services/common-utilities/common-utilities.service';

import { UserFormPage } from '../app/user-form/user-form.page';

@NgModule({
  declarations: [
    AppComponent,
    UserFormPage
  ],
  entryComponents: [
    UserFormPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot({
      name: '_billiardsTracker'
    }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CommonUtilitiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
