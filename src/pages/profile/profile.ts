import { HomePage } from './../home/home';
import { Profile } from './../../app/model/profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {


  profile = {} as Profile;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase,
    private authentication: AngularFireAuth) {
  }

  ionViewDidLoad() {

  }

  createProfile() {
    this.authentication.authState.subscribe(auth => {
      this.db.object(`profile/${auth.uid}`).set(this.profile)
        .then(() => this.navCtrl.setRoot(HomePage));
    })
  }

}
