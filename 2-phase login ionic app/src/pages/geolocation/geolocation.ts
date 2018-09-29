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
declare var google: any;
@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})


export class GeolocationPage {
	@ViewChild('map') mapElement: ElementRef;
	map: any;
markers = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,private geolocation: Geolocation,private loginService: LoginService) {
	   platform.ready().then(() => {
    this.initMap();
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocationPage');
  }
initMap() {
	 this.map = new google.maps.Map(this.mapElement.nativeElement, {
    zoom: 7,
    center: {lat: 41.85, lng: -87.65}
  }); 
  this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((resp) => {
    let mylocation = new google.maps.LatLng(resp.coords.latitude,resp.coords.longitude);
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 15,
      center: mylocation
    });
  });
  let watch = this.geolocation.watchPosition();
  watch.subscribe((data) => {
    this.deleteMarkers();
    let updatelocation = new google.maps.LatLng(data.coords.latitude,data.coords.longitude);
    let image = 'assets/imgs/blue-bike.png';
    this.addMarker(updatelocation,image);
    this.setMapOnAll(this.map);
  });
}

addMarker(location, image) {
  let marker = new google.maps.Marker({
    position: location,
    map: this.map,
    icon: image
  });
  this.markers.push(marker);
}

setMapOnAll(map) {
  for (var i = 0; i < this.markers.length; i++) {
    this.markers[i].setMap(map);
  }
}

clearMarkers() {
  this.setMapOnAll(null);
}

deleteMarkers() {
  this.clearMarkers();
  this.markers = [];
}
}
