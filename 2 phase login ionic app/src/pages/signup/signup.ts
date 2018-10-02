import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { LoginService } from '../services/login-service';

import { HomePage } from '../home/home';
import { NetworkInterface } from '@ionic-native/network-interface';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
movies: Array<any>;
msg: String;
ip:String;
resultt:String;
longitude:String;
	latitude:String;
markers = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,private loginService: LoginService,private storage: Storage,private networkInterface: NetworkInterface, private geolocation: Geolocation) {

 
 ///////////////working////////
 
//this.networkInterface.getWiFiIPAddress().then(result => {

  /// console.log(result);
  // });

 
  }
  
  x = {
    username: '',
    password: '',
	mobile:'',
	name:'',
	email:'',
	resultt:'',
	ip:''
	
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

    signup(x) {
		console.log('11111111111111111');
		//////console.log();
		 
			console.log(x);
			console.log(x.username);
	//this.networkInterface.getWiFiIPAddress().then(result => {

 //  console.log(result);
  // x.resultt=result;
  // });
   this.geolocation.getCurrentPosition().then((resp) => { console.log(resp.coords.latitude+resp.coords.longitude);
  
  
 console.log(resp.coords.latitude);
 console.log(resp.coords.longitude);
 this.latitude=resp.coords.latitude;
  console.log(this.latitude);
  
  
 this.longitude=resp.coords.longitude;
  console.log(this.longitude);
 

		 	this.loginService.register(x.email,x.password,x.mobile,x.username,this.latitude,this.longitude).subscribe(
				data => {
						console.log('44545');
				 	 this.movies = data ; 
					 console.log(x.username);
					  console.log(data);
					console.log(data.Error);
					
					
					if(data.Error==='True')
						this.msg= 'Error '+data.Message ;
					else{
						console.log("sign up");
							
						 	this.msg= data.Message ;
		

						this.navCtrl.push(HomePage);	
					}						
				},
				err => {
					console.log(err);
				},
				() => console.log('Movie Search Complete')
			)
			}).catch((error) => {
  console.log('Error getting location', error);
});
		/// this.navCtrl.push(TabsPage);
	}
}
