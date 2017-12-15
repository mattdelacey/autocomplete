import { Component, ViewChild } from '@angular/core';
import { Events, Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { Http, Headers, RequestOptions } from '@angular/http';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = TabsPage;



  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public events: Events) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
    { title: 'Login', component: LoginPage, icon: 'md-lock' },
      { title: 'Home', component: TabsPage, icon: 'md-home' }
     
      
    ];

    events.subscribe('menu:change', (changearray) => {
    // user and time are the same arguments passed in `events.publish(user, time)`
    console.log(changearray.length);
    //console.log(Object.keys(changearray).length);
    console.log('loading menu styles');
    for (let i=0; i < changearray.length; i ++ ) {
      //console.log(i);
      //console.log(changearray[i].title);
      this.pages[i].title = changearray[i].title;
      this.pages[i].icon = changearray[i].icon;
    }
  });

  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      console.log('platform ready');
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
