import { Component, ChangeDetectorRef } from '@angular/core';
import { Kinvey } from 'kinvey-angular2-sdk';
import { Events, NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { BrandData } from '../../providers/brand-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private ref: ChangeDetectorRef, public navCtrl: NavController, private brandData: BrandData, public events:Events) {
    
  }

  myBrandData={} as any;
  myHeaderColor ="";


  ionViewDidEnter() {
    console.log('loading home screen');
    
     
  }

}
