import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { LoginService } from '../services/login-service';
import { SignupPage } from '../signup/signup'
import { GeolocationPage } from '../geolocation/geolocation';
import { Geolocation } from '@ionic-native/geolocation';
import { FirstPage } from '../first/first';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  movies: Array<any>;
msg: String;
longitude:any;
	latitude:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private loginService: LoginService,private storage: Storage, private geolocation: Geolocation) {
  }

  x = {
    username: '',
    password: '',
	imobicash_address: '',
	authcode:'',
	ip:''
  };
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  
  signin(x) {
	     
		console.log('19');
	
		 
			console.log(x);
			console.log(x.username);
			 
       	this.loginService.login(x.username,x.password).subscribe(
				data => {
				 	 this.movies = data ; 
					 
					console.log(data.Error);
					
					
					console.log("49"+this.movies);
					if(data.Error==='True')
						this.msg= data.Message ;
					else{
						this.msg= data.Message ;
				

				this.storage.set('username', x.username);
			  this.storage.set('password', x.password);
			 	console.log("5555555555555"); 
			console.log(x.username +x.password);
			  		    this.geolocation.getCurrentPosition().then((resp) => { console.log(resp.coords.latitude+resp.coords.longitude);
  
  
 console.log(resp.coords.latitude);
 console.log(resp.coords.longitude);
 this.latitude=resp.coords.latitude;
  console.log(this.latitude);
  
  
 this.longitude=resp.coords.longitude;
  console.log(this.longitude);
 

		 	this.loginService.logincheck(x.username,this.latitude,this.longitude).subscribe(
				data => {
						console.log('44545');
						
						console.log("logincheck");
				 	 this.movies = data ; 
					 console.log(x.username);
					  console.log(data);
					console.log(data.Error);
					
					
					if(data.Error==='True')
						this.msg= 'Error '+data.Message ;
					else{
						console.log("sign up");
							
						 	this.msg= data.Message ;
		

						this.navCtrl.push(FirstPage);	
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
						
			  		 
					//this.navCtrl.push(TabsPage);	
				}					
				},
				err => {
					console.log(err);
				},
				() => console.log('Movie Search Complete')
			); 
	
	} ;
	
	signup(){
   this.navCtrl.push(SignupPage, {}, {animate:false});
  }
	 navigateToOtherPage(): void {
   this.navCtrl.push(GeolocationPage);
}
	

}
