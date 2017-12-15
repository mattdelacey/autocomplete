import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SearchPage } from '../pages/search/search';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { BrandData } from '../providers/brand-data';
import { File } from '@ionic-native/file'
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Headers, RequestOptions } from '@angular/http';
//import { CompleteTestService } from '../providers/CompleteTestService';

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    HomePage,
    TabsPage,
    LoginPage
    //CompleteTestService
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    HttpModule
    //CompleteTestService
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  providers: [ {provide: ErrorHandler, useClass: IonicErrorHandler}, File, BrandData]
})
export class AppModule {}
