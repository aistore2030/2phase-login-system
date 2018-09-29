import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams ,Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { LoginService } from '../services/login-service';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the GeolocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
//declare var google: any;
@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})


export class GeolocationPage {
	@ViewChild('map') mapElement: ElementRef;
	map: any;
markers = [];
longitude:String;
	latitude:String;
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,private geolocation: Geolocation,private loginService: LoginService) {
	   platform.ready().then(() => {
    this.initMap();
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocationPage');
  }
initMap() {
	
   
  this.geolocation.getCurrentPosition().then((resp) => { console.log(resp.coords.latitude+resp.coords.longitude);
  
  
 console.log(resp.coords.latitude);
 console.log(resp.coords.longitude);
  this.latitude=resp.coords.latitude;
  console.log(this.latitude);
 this.longitude=resp.coords.longitude;
  console.log(this.longitude);
}).catch((error) => {
  console.log('Error getting location', error);
});
}








}
