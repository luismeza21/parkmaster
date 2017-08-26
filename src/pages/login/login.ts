import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
//Register
import { ProfilePage } from './../profile/profile';
import { RegisterPage } from './../register/register';
import { User } from './../../app/model/user';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

user = {} as User;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private authentication: AngularFireAuth) {
  }


  ionViewDidLoad() {
  }

  async login(user: User) {
    try {
      const result = await this.authentication.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
      if (result) {
        this.navCtrl.setRoot(HomePage);
      }
    }

    catch (e) {
      console.error(e);
    }
  }

    signInWithFacebook() {
    this.authentication.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => console.log(res));
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }


}
