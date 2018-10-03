import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { LoginService } from '../services/login-service';

/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage,public app: App) {
	  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }
 logoutme() {
    //this.navCtrl.push(WelcomePage);
	this.storage.set('username',"");
			    this.storage.set('password',"");
				 const root = this.app.getRootNav();
    root.popToRoot();
   
   
  }
}
