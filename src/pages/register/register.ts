import { ProfilePage } from './../profile/profile';
import { User } from './../../app/model/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

    user = {} as User;

  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   private authentication: AngularFireAuth) {
  }

  async register(user: User) {
    try {
      const result = await this.authentication.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
      if(result){
        this.navCtrl.setRoot(ProfilePage);
      }
    }

    catch (e){
      console.error(e);
    }

  }

}
