import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Kinvey } from 'kinvey-angular2-sdk';
import { NavController } from 'ionic-angular';
import { BrandData } from '../../providers/brand-data';
import { AutoCompleteModule, AutoCompleteComponent } from 'ionic2-auto-complete';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

	selectOptions = [];

  searchProductString = "";
  greeting: string;
  productsInitial = []; 
  products = []; 
  myProductPic = "";
  myProductPrice;
  myProductSKU;
  showMe = false;

  constructor(private http:Http, private ref: ChangeDetectorRef, public navCtrl: NavController, public brandData: BrandData) {

  }
  

  searchProduct(searchbar) {
      // reset countries list with initial call

      this.products = this.productsInitial;
      // set q to the value of the searchbar
      var q = searchbar.target.value;
  
      console.log('1: ' + q);
      // if the value is an empty string don't filter the items
      if (q.trim() == '') {
          return;
      }
      

      var myBody2 = {
        "server": "prod",
        "prefix": q
      }

      var myBody = {
      "products" : {
        "text" : q,
        "completion" : {
          "field" : "name"
        }
      }
    }
     

      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      headers.append('Authorization', 'Basic ' + btoa('<yourcredentials>'));
      let options = new RequestOptions({ headers: headers });
      

      let postParams = {
        title: 'foo',
        body: 'bar',
        userId: 1
      }
//this.http.post("http://35.184.7.118//elasticsearch/products/_suggest", myBody, options)
      this.http.post("https://us-central1-regal-muse-185000.cloudfunctions.net/suggest-products", myBody2)
      .subscribe(data => {
        console.log(data['_body']);
        this.showMe = true;
        let jsonbody = JSON.parse(data['_body']);
        console.log(jsonbody.products[0].options);
        this.products = jsonbody.products[0].options;
       }, error => {
        console.log(error);// Error getting the data
      });
  }

  ionViewWillEnter() {
    console.log('entering view');
    this.showMe = true;
  }


  clickMe(event) {
    console.log(event);
    this.showMe = false;

    this.myProductPic = event._source.image;
    this.myProductPrice = event._source.price;
    this.myProductSKU = event._source.sku;
  }
}