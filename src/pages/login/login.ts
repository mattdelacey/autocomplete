import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

	userData = {
        email: "",
        password: ""
    };

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000
    });
    toast.present();
  }




  signUp() {

  }

  logout() {
      
  }

}
