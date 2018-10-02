import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginService } from '../pages/services/login-service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { NetworkInterface } from '@ionic-native/network-interface';
import { SignupPage } from '../pages/signup/signup';
import { Geolocation } from '@ionic-native/geolocation';
import { GeolocationPage } from '../pages/geolocation/geolocation';
@NgModule({
  declarations: [
    MyApp,
    HomePage,SignupPage,GeolocationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	IonicStorageModule.forRoot(),HttpClientModule,HttpModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,SignupPage,GeolocationPage
	
  ],
  providers: [
    StatusBar,
    SplashScreen,
	LoginService,NetworkInterface,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
	Geolocation
  ]
})
export class AppModule {}
