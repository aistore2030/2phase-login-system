import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginService } from '../pages/services/login-service';
import { HomePage } from '../pages/home/home';
import { Storage } from '@ionic/storage';
import { NetworkInterface } from '@ionic-native/network-interface';
import { SignupPage } from '../pages/signup/signup';
import { GeolocationPage } from '../pages/geolocation/geolocation';
import { FirstPage } from '../pages/first/first';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
   networkInterface: any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
		
		


      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

