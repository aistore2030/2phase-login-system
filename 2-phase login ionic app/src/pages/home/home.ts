import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { LoginService } from '../services/login-service';
import { SignupPage } from '../signup/signup'
import { GeolocationPage } from '../geolocation/geolocation';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  movies: Array<any>;
msg: String;

  constructor(public navCtrl: NavController, public navParams: NavParams,private loginService: LoginService,private storage: Storage) {
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
				console.log(x.ip);	 
       	this.loginService.login(x.username,x.password).subscribe(
				data => {
				 	 this.movies = data ; 
					 
					console.log(data.Error     );console.log(this.movies);
					if(data.Error==='True')
						this.msg= data.Message ;
					else{
						this.msg= data.Message ;
				

				this.storage.set('username', data.Username);
			    this.storage.set('password', data.password);
			
			  		 
						
			  		   this.loginService.logincheck(x.username,x.ip).subscribe(
					data => {
							if(data.Error==='True')
								
							this.msg= data.Message ;
							
					else{
						this.msg= data.Message ;
							console.log("inside login check"+x.username);
							this.storage.set('username', data.Username);
			    this.storage.set('password', data.password);
						//this.navCtrl.push(GeolocationPage);
					}
					},
					err => {
					console.log(err);
				},
				() => console.log('Movie Search Complete')
			); 
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
	
	

}
