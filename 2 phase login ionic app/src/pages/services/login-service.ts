
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the LoginServicePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 
@Injectable()
export class LoginService {
//url : String ='http://localhost:8082/apisakshamapp';
url : String ='http://192.168.1.7:8082/apisakshamapp';
    constructor(private http:Http) {

    }

    login(email,password) {
		
		console.log(url);
  //var url =  'http://contact.sakshamapp.com/Loginpage?email='+email+'&password='+password;
     var url =  'http://192.168.1.10:98/test/login?email='+email+'&password='+password;
        
		var response = this.http.get(url).map(res => res.json());
		
		
		console.log(response);
		//sessionStorage.setItem('username','willie-santana@hotmail.com');
        return response;
		//store the data in the key value format

    }  
	
	logincheck(email,latitude,longitude) {
		
		console.log(url);
  //var url =  'http://contact.sakshamapp.com/Loginpage?email='+email+'&password='+password;
     var url =  'http://192.168.1.10:98/test/logincheck?email='+email+'&longitude='+longitude+'&latitude='+latitude;
        
		var response = this.http.get(url).map(res => res.json());
		
		
		console.log(response);
		//sessionStorage.setItem('username','willie-santana@hotmail.com');
        return response;
		//store the data in the key value format

    } 
register(email,password,mobile,username,latitude,longitude) {
		
		console.log(url);
  //var url =  'http://contact.sakshamapp.com/Loginpage?email='+email+'&password='+password;
     var url =  'http://192.168.1.10:98/test/Register?email='+email+'&password='+password+'&mobile='+mobile+'&name='+username+'&latitude='+latitude+'&longitude='+longitude;
        
		var response = this.http.get(url).map(res => res.json());
		
		
		console.log(response);
		//sessionStorage.setItem('username','willie-santana@hotmail.com');
        return response;
		//store the data in the key value format

    }

}

