import {AutoCompleteService} from 'ionic2-auto-complete';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map'

@Injectable()
export class CompleteTestService implements AutoCompleteService {
  labelAttribute = "name";
  myresponse = [];

  holdProducts = [];

  constructor(private http:Http) {

  }

  helloMe() {
    return "hello";
  }

  clickMe(selection) {
    console.log('items shown: ' + selection);

    console.log(this.holdProducts);

    for (var i=0; i < this.holdProducts.length; i++ ) {
      console.log("r" + i + ": " + this.holdProducts[i].name);
      console.log(this.holdProducts[i].name.length);
      if ( selection != this.holdProducts[i].name ) {
        console.log('names dont match');
        continue;
      } else {
          return i;
      }
    }

 
  }

  itemSelected(selected:string) {
    console.log('item selected: ' + selected);
  }

  getResults(keyword:string) {
    var myBody = {
      "products" : {
        "text" : keyword,
        "completion" : {
          "field" : "name"
        }
      }
    }

    var myBody2 = {
      "server": "prod",
      "prefix": keyword
    }


    // clear results
    //
    for (var i=this.holdProducts.length-1; i >=0; i++) {
      this.holdProducts.pop();
     }

    

    console.log('getting results');
    /*console.dir(myBody2);
    var headers = new Headers({'Authorization': 'Basic ' + btoa('user:PM6L5ncQmtFs')});
    var options = new RequestOptions({headers: headers});*/
    //return this.http.post("http://35.184.7.118//elasticsearch/products2/_suggest", 
    this.http.post("https://us-central1-regal-muse-185000.cloudfunctions.net/suggest-products", 
      myBody2)
      //myBody2, options)
      .map(
        result =>
        {
           console.log( 'returning results');
           /*console.log(result);

           var thisresponse = (result as any)._body;
           thisresponse = JSON.parse(thisresponse);
           //console.log(myresponse.products[0].options);
           var myoptions = thisresponse.products[0].options;
           //myoptions = JSON.parse(myoptions);

          console.log(myoptions);
          console.log('^^^result^^^');
          console.log(myoptions.length);
          //console.log('here');;
          
          this.myresponse = [];
try {
          for (var i=0;i < myoptions.length; i++) {
            console.log('here');
            console.log(myoptions[i].text);
            this.myresponse.push({"name": myoptions[i].text, "pic": myoptions[i]._source.image, "price": myoptions[i]._source.price});
            this.holdProducts.push(myoptions[i]._source);
            console.log( i + ": " + myoptions[i]._source.name);
          }

        } catch (err) {
          console.log(err);
        }

          console.log(this.myresponse.length);

          return this.myresponse;*/
        });
  }
}