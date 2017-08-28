import { ListparkingPageModule } from './../pages/listparking/listparking.module';
import { ListparkingPage } from './../pages/listparking/listparking';
import { ProfilePageModule } from './../pages/profile/profile.module';
import { RegisterPageModule } from './../pages/register/register.module';
import { searchPage } from './../pages/home/search';
import { FindparkingPageModule } from './../pages/findparking/findparking.module';
import { detailParqueadero } from './../pages/myparking/parqueadero';
import { MyparkingModule } from './../pages/myparking/myparking.module';
import { SolicitudesModule } from './../pages/solicitudes/solicitudes.module';
import { MisfavoritosModule } from './../pages/misfavoritos/misfavoritos.module';
import { SocialModule } from './../pages/social/social.module';
import { ParkingModule } from './../pages/parking/parking.module';
import { LoginModule } from './../pages/login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HorarioPage } from './../pages/parking/horario';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//Importar Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//maps

import { Geolocation, Geoposition } from '@ionic-native/Geolocation';
//import { Camera } from '@ionic-native/camera';
import { GoogleMaps } from '@ionic-native/google-maps';
//import { ApiProvider } from '../providers/api/api';


const firebaseConfig = {
    apiKey: "AIzaSyA-mxNCh_IbWVXWFzTbzmf6z-tc8BOuqbA",
    authDomain: "parking-196dd.firebaseapp.com",
    databaseURL: "https://parking-196dd.firebaseio.com",
    projectId: "parking-196dd",
    storageBucket: "parking-196dd.appspot.com",
    messagingSenderId: "755931149738"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HorarioPage,
    detailParqueadero,
    searchPage
  ],
  imports: [
    BrowserModule,
    LoginModule,
    ParkingModule,
    SocialModule,
    MisfavoritosModule,
    SolicitudesModule,
    MyparkingModule,
    RegisterPageModule,
    FindparkingPageModule,
    ProfilePageModule,
    ListparkingPageModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HorarioPage,
    detailParqueadero,
    searchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
