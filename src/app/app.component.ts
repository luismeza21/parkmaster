import { AngularFireAuth } from 'angularfire2/auth';
import { ProfilePage } from './../pages/profile/profile';
import { Myparking } from './../pages/myparking/myparking';
import { PageInterface } from './model/pageinterface';
import { Parking } from './../pages/parking/parking';
import { Solicitudes } from './../pages/solicitudes/solicitudes';
import { Social } from './../pages/social/social';
import { Login } from './../pages/login/login';
import { Misfavoritos } from './../pages/misfavoritos/misfavoritos';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;


  menuPages: PageInterface[] = [
    { titulo: 'Inicio', nombre: 'searchparquederos', component: HomePage, icon: 'pin' },
    { titulo: 'Publica Parqueadero GRATIS', nombre: 'parquederos', component: Myparking, icon: 'home' },
    { titulo: 'Solicitudes', nombre: 'Solicitudes', component: Solicitudes, icon: 'ios-list-box' },
    { titulo: 'Horarios', nombre: 'Horarios', component: Parking, icon: 'alarm' }

  ];

  menuCuenta: PageInterface[] = [
    { titulo: 'Perfil', nombre: 'Cuenta', component: ProfilePage, icon: 'person' },
    { titulo: 'Login', nombre: 'Cuenta', component: Login, icon: 'key' },
    { titulo: 'Mis Favoritos', nombre: 'Favoritos', component: Misfavoritos, icon: 'heart' },
    { titulo: 'Compartir', nombre: 'Compartir', component: Social, icon: 'share' }
  ]

  
  rootPage: any = HomePage;

  constructor(public platform: Platform, 
  public statusBar: StatusBar, 
  public splashScreen: SplashScreen,
  private authentication: AngularFireAuth) {
    this.initializeApp();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page: PageInterface) {
    this.nav.setRoot(page.component);
  }


  signOut() {
    this.authentication.auth.signOut();
    console.log(this.authentication);
  }
}
